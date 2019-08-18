import React from "react";
import morningInterface from "../images/morningInterface.png";
import reactImageGallery from "../images/reactImageGallery.png";
import ocrCapstone from "../images/ocrCapstone.png";
import libraryManager from "../images/libraryManager.png";
import virtualAssistant from "../images/virtualAssistant.png";
import southCanStrength from "../images/southCanStrength.png";
const Work = ({ siteTitle }) => (
    <div className="work" id="work">
        <div className="work__heading">
            <h2>works</h2>
        </div>
        <div className="thumb-wrap">
            <div className="thumb-container">
            <label htmlFor="reactImageGallery">
                <div className="thumb-unit">
                <img src={reactImageGallery} className="work__image"  alt="Flickr Gallery project"/>
                </div>
                <div className="thumb-overlay">
                <strong>React Image Gallery</strong>
                </div>
            </label>
            <label htmlFor="OCRWithFlickr">
                <div className="thumb-unit">
                <img src={ocrCapstone} className="work__image"  alt="OCR Capstone work"/>
                </div>
                <div className="thumb-overlay">
                <strong>OCR with Flickr</strong>
                </div>
            </label>
            <label htmlFor="morningInterface">
                <div className="thumb-unit">
                <img src={morningInterface} className="work__image"  alt="Morning Interface app"/>
                </div>
                <div className="thumb-overlay">
                <strong>Morning Interface</strong>
                </div>
            </label>
            <label htmlFor="libraryManager">
                <div className="thumb-unit">
                <img src={libraryManager} className="work__image" alt="Library Manager work"/>
                </div>
                <div className="thumb-overlay">
                <strong>Library Manager</strong>
                </div>
            </label>
            <label htmlFor="virtualAssistant">
                <div className="thumb-unit">
                <img src={virtualAssistant} className="work__image" alt="virtualAssistant app"/>
                </div>
                <div className="thumb-overlay">
                <strong>Virtual Assistant</strong>
                </div>
            </label>
            <label htmlFor="southCanStrength">
                <div className="thumb-unit">
                <img src={southCanStrength} className="work__image" alt="southCanStrength website"/>
                </div>
                <div className="thumb-overlay">
                <strong>SouthCanStrength Website</strong>
                </div>
            </label>
            </div>
        </div>
        <div className="work-wrap">
            <div className="work-container">
                <label htmlFor="return">
                    <div className="work-return"></div>
                </label>
                <div className="noscript" id="reactImageGallery">
                    <h4 className="project-title">React Image Gallery</h4>
                    <div className="noscript-load">
                        <div className="workwrap__img__section">
                            <div className="img__column">
                                <img src={reactImageGallery} alt="Flickr Gallery project img1" className="workwrap__project__img" onclick="switchImage(this);"/>
                            </div>
                            <div className="img__column">
                                <img src={reactImageGallery} alt="Flickr Gallery project img1" className="workwrap__project__img" onclick="switchImages(this);"/>
                            </div>
                            <div className="img__column">
                                <img src={reactImageGallery} alt="Flickr Gallery project img1" className="workwrap__project__img" onclick="switchImages(this);"/>
                            </div>
                            <div className="img__column">
                                <img src={reactImageGallery} alt="Flickr Gallery project img1" className="workwrap__project__img" onclick="switchImages(this);"/>
                            </div>
                        </div>
                        <div className="workwrap__overview__section">
                            <ul>
                                <li>
                                    <a href="#">Icon#1</a>
                                </li>
                                <li>
                                    <a href="#">Icon#2</a>
                                </li>
                            </ul>
                            <p>
                            Image Gallery built using React and the Flickr API. Allows
                        user to send search queries to Flickr and displays image
                        results.
                            </p>
                        </div>
                    </div>
                </div> 
    
            </div>
        </div>
        {/* <div className="work__main ">
        <div className="work--card">
            <a href="http://159.89.116.234:8080/">
            <div className="work--card--heading">
            <img src={reactImageGallery} className="work__image"  alt="Flickr Gallery project"/>
                <h4>React Image Gallery</h4>
            </div>
            <p>
                Image Gallery built using React and the Flickr API. Allows
                user to send search queries to Flickr and displays image
                results.
            </p>
            </a>
        </div>
        <div className="work--card">
        <a href="https://fathomless-refuge-88305.herokuapp.com/">
            <div className="work--card--heading">
                <img src={ocrCapstone} className="work__image"  alt="OCR Capstone work"/>
                <h4>OCR with Flickr</h4>
            </div>
        <p>
            Communicates with Flickr API and Microsoft Computer Vision
            API to allow the user to search images on Flickr then
            extract any potential words contained inside.
        </p>
        </a>
        </div>
        <div className="work--card">
          <a href="https://agile-thicket-44316.herokuapp.com/">
            <div className="work--card--heading">
                <img src={morningInterface} className="work__image"  alt="Morning Interface app"/>
                <h4>Twitter Interface</h4>
            </div>
            <p>
                Uses OAuth to sign in user with Twitter account and shows
                an interface containing detailed information pertaining to
                the user's Twitter account.
            </p>
          </a>
        </div>
        <div className="work--card">
            <a href="https://atukoran.myweb.cs.uwindsor.ca/project/php/home.php">
            <div className="work--card--heading">
                <img src={libraryManager} className="work__image" alt="Library Manager work"/>
                <h4>Library Manager</h4>
            </div>
            <p>Libary Management System build using PHP, MySQL and Javascript.
                User can issue books and join waiting lists for books
                currently issued.  
            </p>
          </a>
        </div>
        <div className="work--card">
            <a href="https://azuretest321.azurewebsites.net/">
                <div className="work--card--heading">
                    <img src={virtualAssistant} className="work__image" alt="virtualAssistant app"/>
                    <h4>Virtual Assistant </h4>
                </div>
                <p>App build using the Google Cloud Storage and Vision to deliver text extration at the click of a button.
                    This application makes multiple API request and implements socket.io for communcation between front-end and back-end. 
                </p> 
            </a>
        </div>
        <div className="work--card">
            <a href="https://shehanat.github.io/southCanStrengthWebsite/">
                <div className="work--card--heading">
                    <img src={southCanStrength} className="work__image" alt="southCanStrength website"/>
                    <h4>SouthCanStrength Website </h4>
                </div>
                <p>Website built for SouthCanStrength coaching services company. Implemented responsive design, good accessibility standards and SEO guildlines.
                    This application is hosted on Github Pages and is built using the Jekyll static site generator. 
                </p> 
            </a>
        </div>
        </div> */}
        <script>
            {/* function switchImage(img){
                var expandImg = document.getElementById("");
                var img 
            } */}
        </script>
    </div>
)

export default Work;