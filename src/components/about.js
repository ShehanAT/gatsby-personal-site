import React, {Component} from "react";
import profilePic from "../images/profilePic.svg";
import blogIcon from "../images/blogIcon.svg";
import certificateIcon from "../images/certificateIcon.svg";
import codeIcon from "../images/codeIcon.svg";
import youtubeIcon from "../images/youtubeIcon.svg";

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
                  <h2 >About myself</h2>
              </div>
              <div className="about__main about-container">
                  <div className="about__img__section" >
                      <img src={youtubeIcon} className="about__icons"/>
                      <img src={blogIcon} className="about__icons"/>
                      <img src={profilePic} alt="" id="aboutProfilePic"/> 
                      <img src={codeIcon} className="about__icons" />
                      <img src={certificateIcon} className="about__icons" />                   
                  </div>
                  <div className="about__blurb ">
                      <p><strong>Hi, I'm Shehan Atuk and welcome to my website.</strong> I am a web developer, web designer and most importantly, problem solver. I believe in two foundational pillars as a good problem solver: good soft skills and tons of in-the-trenches experience. I have worked with many different clients and I'm sure I can provide value to you too. Checkout <a href="#work">my work</a> and feel free to <a href="#contact">contact me</a> </p>
                  </div>
              </div>
                  <div className="about__skills__container clearfix">
                  
                  <div className="skill-unit">
                        <div className="skill-label">
                            Communication
                        </div>
                        <div className="skill-icon">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                      <div className="skill-unit skill-right">
                        <div className="skill-label">
                            Organization
                        </div>
                        <div className="skill-icon">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                      <div className="skill-unit">
                        <div className="skill-label">
                            Learning
                        </div>
                        <div className="skill-icon">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                      <div className="skill-unit skill-right">
                        <div className="skill-label">
                            Teaching
                        </div>
                        <div className="skill-icon">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                  <div className="skill-unit">
                        <div className="skill-label">
                            Planning
                        </div>
                        <div className="skill-icon">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                      <div className="skill-unit skill-right">
                        <div className="skill-label">
                            App Development
                        </div>
                        <div className="skill-icon">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                      <div className="skill-unit">
                        <div className="skill-label">
                            UI Design 
                        </div>
                        <div className="skill-icon">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                      <div className="skill-unit skill-right">
                        <div className="skill-label">
                            UX Design
                        </div>
                        <div className="skill-icon">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                </div> 
            </div>
        ); 
    }
} 
