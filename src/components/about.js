import React, {Component} from "react";
import profilePic from "../images/profilePic.svg";
import blogIcon from "../images/blogIcon.svg";
import certificateIcon from "../images/certificateIcon.svg";
import resumeIcon from "../images/resumeIcon.svg";
import youtubeIcon from "../images/youtubeIcon.svg";
import Tooltip from '@material-ui/core/Tooltip';
export default class About extends Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        window.location.href = 'mailto:shehanatuk@gmail.com';
    }
    showResume(){
        window.location.href = "https://docs.google.com/document/d/1zbA6wURmnkbgY36lH1GYpTbzjal4Hlf3vBkZWfqDZV0/edit?usp=sharing";
    }
    showCerts(){
        window.location.href = "https://docs.google.com/document/d/12vNV5q60YaT-zpf-YNOUAT8fU7QQonxjXE9TMNhAdwY/edit?usp=sharing";
    }
    showBlog(){
        window.location.href = "https://shehantips.com/";
    }
    showYoutube(){
        window.location.href = "https://www.youtube.com/channel/UCtxed_NljgtAXrQMMdLvhrQ/videos?view_as=subscriber";
    }
    render(){
        return ( 
            <div className="about" id="about">
              <div className="about__heading">
                  <h2 >About myself</h2>
              </div>
              <div className="about__main about-container">
                  <div className="about__img__section" >
                      <Tooltip title="Visit my Youtube channel" aria-label="Youtube channel">
                      <img src={youtubeIcon} className="about__icons" alt="youtube Icon" onClick={this.showYoutube.bind(this)}/>
                      </Tooltip>
                      <Tooltip title="Visit my blog" aria-label="Blog">
                      <img src={blogIcon} className="about__icons" alt="blog Icon" onClick={this.showBlog.bind(this)}/>
                      </Tooltip>
                      <img src={profilePic}  id="aboutProfilePic" alt="profilePic"/> 
                      <Tooltip title="View My Resume" aria-label="Download Resume">
                      <img src={resumeIcon} className="about__icons" alt="code Icon" onClick={this.showResume.bind(this)} />
                      </Tooltip>
                      <Tooltip title="View My Certifications" aria-label="Certifications">
                      <img src={certificateIcon} className="about__icons" alt="certificate Icon" onClick={this.showCerts.bind(this)}/>           
                      </Tooltip>        
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
                        <div className="skill-icon skill1">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                      <div className="skill-unit skill-right">
                        <div className="skill-label">
                            Organization
                        </div>
                        <div className="skill-icon skill2">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                      <div className="skill-unit">
                        <div className="skill-label">
                            Learning
                        </div>
                        <div className="skill-icon skill3">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                      <div className="skill-unit skill-right">
                        <div className="skill-label">
                            Teaching
                        </div>
                        <div className="skill-icon skill4">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                  <div className="skill-unit">
                        <div className="skill-label">
                            Planning
                        </div>
                        <div className="skill-icon skill5">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                      <div className="skill-unit skill-right">
                        <div className="skill-label">
                            App Development
                        </div>
                        <div className="skill-icon skill6">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                      <div className="skill-unit">
                        <div className="skill-label">
                            UI Design 
                        </div>
                        <div className="skill-icon skill7">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                      <div className="skill-unit skill-right">
                        <div className="skill-label">
                            UX Design
                        </div>
                        <div className="skill-icon skill8">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                      </div>
                </div> 
            </div>
        ); 
    }
} 
