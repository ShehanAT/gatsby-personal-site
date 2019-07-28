import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import twitterPic from "../images/twitterPic.png";
import reactImageGallery from "../images/reactImageGallery.png";
import ocrCapstone from "../images/ocrCapstone.png";
import libraryManager from "../images/libraryManager.png";
const Project = ({ siteTitle }) => (
    <div className="project" id="project">
        <div className="project__heading">
            <h2>Projects</h2>
        </div>
        <div className="project__main ">
        <div className="project--card">
            <a href="http://159.89.116.234:8080/">
            <div className="project--card--heading">
            <img src={reactImageGallery} class="project__image"  alt="picture of my React Image Gallery project"/>
                <h4>React Image Gallery</h4>
            </div>
            <p>
                Image Gallery built using React and the Flickr API. Allows
                user to send search queries to Flickr and displays image
                results.
            </p>
            </a>
        </div>
        <div className="project--card">
        <a href="https://fathomless-refuge-88305.herokuapp.com/">
            <div className="project--card--heading">
                <img src={ocrCapstone} class="project__image"  alt="picture of my OCR Capstone project"/>
                <h4>OCR with Flickr</h4>
            </div>
        <p>
            Communicates with Flickr API and Microsoft Computer Vision
            API to allow the user to search images on Flickr then
            extract any potential words contained inside.
        </p>
        </a>
        </div>
        <div className="project--card">
          <a href="https://agile-thicket-44316.herokuapp.com/">
            <div className="project--card--heading">
                <img src={twitterPic} class="project__image"  alt="picture of my Twitter Interface project"/>
                <h4>Twitter Interface</h4>
            </div>
            <p>
                Uses OAuth to sign in user with Twitter account and shows
                an interface containing detailed information pertaining to
                the user's Twitter account.
            </p>
          </a>
        </div>
        <div className="project--card">
            <div className="project--card--heading">
                <img src={libraryManager} class="project__image" alt="picture of my Library Manager project"/>
                <h4>Library Manager</h4>
            </div>
            <p>Libary Management System build using PHP, MySQL and Javascript.
                User can issue books and join waiting lists for books
                currently issued.  
            </p>
        </div>
        </div>
    </div>
)

export default Project;