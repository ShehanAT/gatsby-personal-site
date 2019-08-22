import React, { Component } from "react";

import reactImageGallery1 from "../images/reactImageGallery1.svg";
import reactImageGallery2 from "../images/reactImageGallery2.svg";
import reactImageGallery3 from "../images/reactImageGallery3.svg";
import capstone1 from "../images/capstone1.svg";
import capstone2 from "../images/capstone2.svg";
import capstone3 from "../images/capstone3.svg";
import morningInterface1 from "../images/morningInterface1.svg";
import morningInterface2 from "../images/morningInterface2.svg";
import morningInterface3 from "../images/morningInterface3.svg";
import libraryManager1 from "../images/libraryManager1.svg";
import libraryManager2 from "../images/libraryManager2.svg";
import libraryManager3 from "../images/libraryManager3.svg";
import virtualAssistant1 from "../images/virtualAssistant1.svg";
import virtualAssistant2 from "../images/virtualAssistant2.svg";
import virtualAssistant3 from "../images/virtualAssistant3.svg";
import southCanStrength1 from "../images/southCanStrength1.svg";
import southCanStrength2 from "../images/southCanStrength2.svg";
import southCanStrength3 from "../images/southCanStrength3.svg";
import externalLinkIcon from "../images/externalLinkIcon.svg";
import githubIcon from "../images/githubIcon.svg";
import backButtonIcon from "../images/backButtonIcon.svg";
export default class Work extends Component {
    componentDidMount(){
        //hiding all project details on startup
        var AllprojectDetails = document.querySelectorAll(".project-details");
        AllprojectDetails.forEach((project) =>  project.style.display = "none");
    }
    showProjectDetails = (e) => {
        var projectId = e.currentTarget.id.slice(6);
        var project = document.getElementById("details-" + projectId);
        project.style.display = "block";
        var projectDetailSection = document.getElementById("work-container");
        projectDetailSection.style.display = "flex";
        projectDetailSection.classList.add("showDetailsAnimation");

        setTimeout(function(){
            projectDetailSection.classList.remove("showDetailsAnimation");
        }, 1000);
        
        var thumbnailSection = document.getElementById("thumb-container");
        thumbnailSection.style.display = "none";
    }
    showProjectThumbnails = e => {
        var AllprojectDetails = document.querySelectorAll(".project-details");
        AllprojectDetails.forEach((project) =>  project.style.display = "none");
        document.getElementById("thumb-container").style.display = "grid";
        document.getElementById("work-container").style.display = "none";
        var projectThumbnailsSection = document.getElementById("thumb-container");
        projectThumbnailsSection.classList.add("hideDetailsAnimation");
        setTimeout(function(){
            projectThumbnailsSection.classList.remove("hideDetailsAnimation");
        }, 1000);
    }

    switchImages = e =>{
        // var expandImg = document.getElementById("");
        console.log(e.target.id.slice(0, 1));
        var smallImgId =  e.target.id;
        const smallImg = document.getElementById(smallImgId);
        
        var bigImg = document.getElementById("workwrap__project__main__img" + smallImgId.slice(0, 1));
        console.log(smallImgId, bigImg);
        bigImg.src = smallImg.src;
         return null;
    }

    render(){
        return (
            <div className="work  " id="work">
                <div className="work__heading">
                    <h2>works</h2>
                </div>
                <div className="work-belt">
                <div className="thumb-wrap">
                    <div className="thumb-container" id="thumb-container">
                    <label htmlFor="reactImageGallery"  onClick={this.showProjectDetails.bind(this)}  id="thumb-1">
                        <div className="thumb-unit">
                        <img src={reactImageGallery1} className="work__image"  alt="Flickr Gallery project" />
                        </div>
                        <div className="thumb-overlay">
                        <strong>React Image Gallery</strong>
                        </div>
                    </label>
                    <label htmlFor="OCRWithFlickr"  onClick={this.showProjectDetails.bind(this)}  id="thumb-2">
                        <div className="thumb-unit">
                        <img src={capstone1} className="work__image"  alt="OCR Capstone work"/>
                        </div>
                        <div className="thumb-overlay">
                        <strong>OCR with Flickr</strong>
                        </div>
                    </label>
                    <label htmlFor="morningInterface"  onClick={this.showProjectDetails.bind(this)} id="thumb-3">
                        <div className="thumb-unit">
                        <img src={morningInterface1} className="work__image"   alt="Morning Interface app"/>
                        </div>
                        <div className="thumb-overlay">
                        <strong>Morning Interface</strong>
                        </div>
                    </label>
                    <label htmlFor="libraryManager"  onClick={this.showProjectDetails.bind(this)} id="thumb-4">
                        <div className="thumb-unit">
                        <img src={libraryManager1} className="work__image"  alt="Library Manager work"/>
                        </div>
                        <div className="thumb-overlay">
                        <strong>Library Manager</strong>
                        </div>
                    </label>
                    <label htmlFor="virtualAssistant" onClick={this.showProjectDetails.bind(this)} id="thumb-5">
                        <div className="thumb-unit">
                        <img src={virtualAssistant1} className="work__image"   alt="virtualAssistant app"/>
                        </div>
                        <div className="thumb-overlay">
                        <strong>Virtual Assistant</strong>
                        </div>
                    </label>
                    <label htmlFor="southCanStrength"  onClick={this.showProjectDetails.bind(this)}  id="thumb-6">
                        <div className="thumb-unit">
                        <img src={southCanStrength1} className="work__image" alt="SouthCanStrength website"/>
                        </div>
                        <div className="thumb-overlay">
                        <strong>SouthCanStrength Website</strong>
                        </div>
                    </label>
                    </div>
                </div>
                <div className="work-wrap">
                    <div className="work-container" id="work-container">
                        <div className="project-details not-visible" id="details-1">
                            <div className="project__details__heading">
                                <a href="#work">
                                <img  src={backButtonIcon} id="project__detials__back" alt="back button for thumbnails section"  onClick={this.showProjectThumbnails.bind(this)} />
                                </a>
                                <h4 className="project-title">React Image Gallery</h4>
                            </div>
                            <div className="workwrap__img__section">
                                <div className="workwrap__bigImg__section">
                                    <img src={reactImageGallery1} alt="Flickr Gallery project main img" className="workwrap__project__main__img"  id="workwrap__project__main__img1"/>
                                </div>
                                <div className="workwrap__smallImg__section">
                                    <div className="img__column">
                                        <img src={reactImageGallery1} alt="Flickr Gallery project img1" className="workwrap__project__img"  id="11"onClick={this.switchImages.bind(this)}/>
                                    </div>
                                    <div className="img__column">
                                        <img src={reactImageGallery2} alt="Flickr Gallery project img1" className="workwrap__project__img" id="12" onClick={this.switchImages.bind(this)}/>
                                    </div>
                                    <div className="img__column">
                                        <img src={reactImageGallery3} alt="Flickr Gallery project img1" className="workwrap__project__img" id="13" onClick={this.switchImages.bind(this)}/>
                                    </div>
                                </div>
                                <div className="workwrap__overview__section">
                                    <ul>
                                        <li>
                                            <a href="http://159.89.116.234:8080/"><img src={externalLinkIcon} alt="external link icon" className="project__details__icons"/></a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/ShehanAT/react_image_gallery"><img src={githubIcon} alt="github icon" className="project__details__icons"/></a>
                                        </li>
                                    </ul>
                                    <p>Image Gallery built using React and the Flickr API. Allows user to send search queries to Flickr and displays image results.</p>
                                </div>
                            </div>
                        </div> 
                        <div className="project-details not-visible" id="details-2">
                            <div className="project__details__heading">
                                <a href="#work">
                                <img  src={backButtonIcon} id="project__detials__back"  alt="back button for thumbnails section"  onClick={this.showProjectThumbnails.bind(this)} />
                                </a>
                                <h4 className="project-title">OCR with Flickr</h4>
                            </div>
                            <div className="workwrap__img__section">
                                <div className="workwrap__bigImg__section">
                                    <img src={capstone1} alt="OCR with Flickr project main img" className="workwrap__project__main__img"  id="workwrap__project__main__img2"/>
                                </div>
                                <div className="workwrap__smallImg__section">
                                    <div className="img__column">
                                        <img src={capstone1} alt="OCR with Flickr project img1" className="workwrap__project__img" id="21"onClick={this.switchImages.bind(this)}/>
                                    </div>
                                    <div className="img__column">
                                        <img src={capstone2} alt="OCR with Flickr project img1" className="workwrap__project__img" id="22"onClick={this.switchImages.bind(this)}/>
                                    </div>
                                    <div className="img__column">
                                        <img src={capstone3} alt="OCR with Flickr project img1" className="workwrap__project__img" id="23"onClick={this.switchImages.bind(this)}/>
                                    </div>
                                </div>
                                <div className="workwrap__overview__section">
                                    <ul>
                                        <li>
                                            <a href="https://fathomless-refuge-88305.herokuapp.com/"><img src={externalLinkIcon} alt="external link icon" className="project__details__icons"/></a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/ShehanAT/OCR-capstoneProject"><img src={githubIcon} alt="github icon" className="project__details__icons"/></a>
                                        </li>
                                    </ul>
                                    <p>Communicates with Flickr API and Microsoft Computer Vision API to allow the user to search images on Flickr then extract any potential words contained inside.</p>
                                </div>
                            </div>
                        </div> 
                        <div className="project-details not-visible" id="details-3">
                            <div className="project__details__heading">
                                <a href="#work">
                                <img  src={backButtonIcon} id="project__detials__back"  alt="back button for thumbnails section" onClick={this.showProjectThumbnails.bind(this)} />
                                </a>
                                <h4 className="project-title">Morning Interface</h4>
                            </div>
                            <div className="workwrap__img__section">
                                <div className="workwrap__bigImg__section">
                                    <img src={morningInterface1} alt="Morning Interface project main img" className="workwrap__project__main__img"  id="workwrap__project__main__img3"/>
                                </div>
                                <div className="workwrap__smallImg__section">
                                    <div className="img__column">
                                        <img src={morningInterface1} alt="Morning Interface project img1" className="workwrap__project__img" id="31" onClick={this.switchImages.bind(this)}/>
                                    </div>
                                    <div className="img__column">
                                        <img src={morningInterface2} alt="Morning Interface project img1" className="workwrap__project__img" id="32" onClick={this.switchImages.bind(this)}/>
                                    </div>
                                    <div className="img__column">
                                        <img src={morningInterface3} alt="Morning Interface project img1" className="workwrap__project__img" id="33" onClick={this.switchImages.bind(this)}/>
                                    </div>
                                </div>
                                <div className="workwrap__overview__section">
                                    <ul>
                                        <li>
                                            <a href="https://agile-thicket-44316.herokuapp.com/"><img src={externalLinkIcon} alt="external link icon" className="project__details__icons"/></a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/ShehanAT/Twitter-Interface"><img src={githubIcon} alt="github icon" className="project__details__icons"/></a>
                                        </li>
                                    </ul>
                                    <p>Uses OAuth to sign in user with Twitter account and shows an interface containing detailed information pertaining to the user's Twitter account.</p>
                                </div>
                            </div>
                        </div> 
                        <div className="project-details not-visible" id="details-4">
                            <div className="project__details__heading">
                                <a href="#work">
                                <img  src={backButtonIcon} id="project__detials__back" alt="back button for thumbnails section" onClick={this.showProjectThumbnails.bind(this)} />
                                </a>
                                <h4 className="project-title">Library Manager</h4>
                            </div>
                            <div className="workwrap__img__section">
                                <div className="workwrap__bigImg__section">
                                    <img src={libraryManager1} alt="Library Manager project main img"   className="workwrap__project__main__img"  id="workwrap__project__main__img4"/>
                                </div>
                                <div className="workwrap__smallImg__section">
                                    <div className="img__column">
                                        <img src={libraryManager1} alt="Library Manager project img1" className="workwrap__project__img" id="41" onClick={this.switchImages.bind(this)}/>
                                    </div>
                                    <div className="img__column">
                                        <img src={libraryManager2} alt="Library Manager project img1" className="workwrap__project__img" id="42" onClick={this.switchImages.bind(this)}/>
                                    </div>
                                    <div className="img__column">
                                        <img src={libraryManager3} alt="Library Manager project img1" className="workwrap__project__img" id="43" onClick={this.switchImages.bind(this)}/>
                                    </div>
                                </div>
                                <div className="workwrap__overview__section">
                                    <ul>
                                        <li>
                                            <a href="https://atukoran.myweb.cs.uwindsor.ca/project/php/home.php"><img src={externalLinkIcon} alt="external link icon" className="project__details__icons"/></a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/ShehanAT/LibraryManager"><img src={githubIcon} alt="github icon" className="project__details__icons"/></a>
                                        </li>
                                    </ul>
                                    <p>Libary Management System build using PHP, MySQL and Javascript. User can issue books and join waiting lists for books currently issued.</p>
                                </div>
                            </div>
                        </div> 
                        <div className="project-details not-visible" id="details-5">
                            <div className="project__details__heading">
                                <a href="#work">
                                <img  src={backButtonIcon} id="project__detials__back"  alt="back button for thumbnails section" onClick={this.showProjectThumbnails.bind(this)} />
                                </a>
                                <h4 className="project-title">Virtual Assistant</h4>
                            </div>
                            <div className="workwrap__img__section">
                                <div className="workwrap__bigImg__section">
                                    <img src={virtualAssistant1} alt="Virtual Assistant project main img" className="workwrap__project__main__img"  id="workwrap__project__main__img5"/>
                                </div>
                                <div className="workwrap__smallImg__section">
                                    <div className="img__column">
                                        <img src={virtualAssistant1} alt="Virtual Assistant project img1" className="workwrap__project__img" id="51" onClick={this.switchImages.bind(this)}/>
                                    </div>
                                    <div className="img__column">
                                        <img src={virtualAssistant2} alt="Virtual Assistant project img1" className="workwrap__project__img" id="52" onClick={this.switchImages.bind(this)}/>
                                    </div>
                                    <div className="img__column">
                                        <img src={virtualAssistant3} alt="Virtual Assistant project img1" className="workwrap__project__img" id="53" onClick={this.switchImages.bind(this)}/>
                                    </div>
                                </div>
                                <div className="workwrap__overview__section">
                                    <ul>
                                        <li>
                                            <a href="https://azuretest321.azurewebsites.net/"><img src={externalLinkIcon} alt="external link icon" className="project__details__icons"/></a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/ismiletech/VirtualAssistant-OCR"><img src={githubIcon} alt="github icon" className="project__details__icons"/></a>
                                        </li>
                                    </ul>
                                    <p>Lets user upload image or pdf file and displays potential text contained within. Built using Google Cloud Storage and Google Cloud Vision API's</p>
                                </div>
                            </div>
                        </div> 
                        <div className="project-details not-visible" id="details-6">
                            <div className="project__details__heading">
                                <a href="#work">
                                <img  src={backButtonIcon} id="project__detials__back"  alt="back button for thumbnails section" onClick={this.showProjectThumbnails.bind(this)} />
                                </a>
                                <h4 className="project-title">SouthCanStrength Website</h4>
                            </div>
                            <div className="workwrap__img__section">
                                <div className="workwrap__bigImg__section">
                                    <img src={southCanStrength1} alt="SouthCanStrength Website main img" className="workwrap__project__main__img"  id="workwrap__project__main__img6"/>
                                </div>
                                <div className="workwrap__smallImg__section">
                                    <div className="img__column">
                                        <img src={southCanStrength1} alt="SouthCanStrength Website project img1" className="workwrap__project__img" id="61" onClick={this.switchImages.bind(this)}/>
                                    </div>
                                    <div className="img__column">
                                        <img src={southCanStrength2} alt="SouthCanStrength Website project img1" className="workwrap__project__img" id="62" onClick={this.switchImages.bind(this)}/>
                                    </div>
                                    <div className="img__column">
                                        <img src={southCanStrength3} alt="SouthCanStrength Website project img1" className="workwrap__project__img" id="63" onClick={this.switchImages.bind(this)}/>
                                    </div>
                                </div>
                                <div className="workwrap__overview__section">
                                    <ul>
                                        <li>
                                            <a href="https://shehanat.github.io/southCanStrengthWebsite/"><img src={externalLinkIcon} alt="external link icon" className="project__details__icons"/></a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/ShehanAT/southCanStrengthWebsite"><img src={githubIcon} alt="github icon" className="project__details__icons"/></a>
                                        </li>
                                    </ul>
                                    <p>Website made for SouthCanStrength coaching services company. Built from scratch to be responsive, implements accessibility guidelines, and industry best practices.</p>
                                </div>
                            </div>
                        </div> 

                    </div>
                </div>
              </div>
            </div>
        );
    }
}
