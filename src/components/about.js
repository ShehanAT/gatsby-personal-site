import React, {Component} from "react";
import TreehouseLogo from "../images/TreehouseLogo.png";
import freeCodeCampLogo from "../images/freeCodeCampLogo.jpg";
import profilePic from "../images/profilePic.svg";
export default class About extends Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        window.location.href = 'mailto:shehanatuk@gmail.com';
    }
    render(){
        return ( 
            <div className="about" id="about">
              <div className="about__heading">
                  <h2 >About me</h2>
              </div>
              
              <div className="about__main about-container">
                  <div className="about__img" >
                      <img src={profilePic} alt="" id="aboutProfilePic"/>                    
                  </div>
                  <div className="about__blurb ">
                      Hi, I'm Shehan Atuk and welcome to my website. I am a web developer, web designer and most importantly, problem solver. I believe in two foundational pillars as a good problem solver: good soft skills and tons of in-the-trenches experience. I have worked with many different clients and I'm sure I can provide value to you too. Checkout <a href="#work">my work</a> and feel free to <a href="#contact">contact me</a> I don't bite, I promise. :smile: 
                  </div>
                  <div className="about__skills__heading">
                      <h2>My Skills</h2>
                  </div>
                  <div className="about__skills__container">
                  <div className="skill-unit">
                        <div className="skill-label">
                            Communication
                        </div>
                        <div className="skill-icon">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                      <div className="skill-unit">
                        <div className="skill-label">
                            Communication
                        </div>
                        <div className="skill-icon">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                      <div className="skill-unit">
                        <div className="skill-label">
                            Communication
                        </div>
                        <div className="skill-icon">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                      <div className="skill-unit">
                        <div className="skill-label">
                            Communication
                        </div>
                        <div className="skill-icon">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                  </div>
              </div>
           
        </div>    
        ); 
    }
} 
