import React, {Component} from "react";
import leftIcon from "../images/leftIcon.svg";
import rightIcon from "../images/rightIcon.svg";
import client1 from "../images/tmpClient1.jpg";
import client2 from "../images/tmpClient2.jpg";
import client3 from "../images/tmpClient3.jpg";

export default class Testimonials extends Component{
    toggleClient = e => {
        const clientInfo = [
            { 
                "img-src": client1, 
                "blurb" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "name" : "Ty Scratch", 
                "job" : "Strength Coach,  SouthCanStrength"
            },
            { 
                "img-src": client2, 
                "blurb" : "idarem ipsum dolor sit amet, consesdctetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "name" : "Jacob Richie", 
                "job" : "Personal Trainer,  Limitless Training Centre"
            },
            { 
                "img-src": client3, 
                "blurb" : "Lorem ium dolorasd sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "name" : "Denna Syed", 
                "job" : "DevOps Engineer,  IsmileTechnologies"
            },
        ]
        var clientId = parseInt(e.currentTarget.id.slice(7)) - 1;//eliminate zero-indexing
        if(document.querySelectorAll(".active-client")){
            //toggle between clients on client profile pic click
            var prevClicnt = document.querySelectorAll(".active-client");
            prevClicnt.item(0).classList.remove("active-client");
            var activePic= document.getElementById("testimonials__profile__img");
            var  activeBlurb = document.getElementById("testimonials__profile__blurb");
            var activeName = document.getElementById("testimonials__profile__name");
            var activeJob = document.getElementById("testimonials__profile__job");
            console.log(activePic, activeBlurb,  activeName, activeJob);
            
            activePic.src = clientInfo[clientId]["img-src"];
            activeBlurb.textContent = clientInfo[clientId]["blurb"];
            activeName.textContent = clientInfo[clientId]["name"];
            activeJob.textContent = clientInfo[clientId]["job"];

            //add .active-client to current client
            var currentClient = document.getElementById("client-" + (clientId + 1));
            currentClient.classList.add("active-client");

            //active-client
            currentClient.childNodes.item(0).classList.add("active-image");

        }
        // else{
        //     //making client 1 the active client by default

        // }
    }
    render(){
        return (
            <div className="testimonials">
                <div className="testimonials__heading">
                    <h2>testimonials</h2>
                </div>
                <div className="testimonials__profile">
                    <div className="left-arrow">
                        <img src={leftIcon} className="testimonials__leftArrow arrow"/>
                    </div>
                    <div className="testimonials__main-content">
                    <div className="profile__info">
                    <img src={client1} className="testimonials__profile__img " id="testimonials__profile__img"/>
                    <figcaption>
                            <strong id="testimonials__profile__name">Ty Scratch</strong>
                            <em id="testimonials__profile__job">Strength Coach, SouthCanStrength</em>
                        </figcaption>
                    </div>
                    <div className="testimontials__blurb">
                        <p id="testimonials__profile__blurb" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    </div>
                    <div className="right-arrow">
                        <img  src={rightIcon} className="testimonials__leftArrow arrow"/>
                    </div>
                </div>
                <div className="testimonials__gallery">
                    <div className="testimonials__client active-client"  id="client-1" onClick={this.toggleClient.bind(this)}>
                        <img src={client1} className="gallery__img"/>
                    </div>
                    <div className="testimonials__client" id="client-2" onClick={this.toggleClient.bind(this)}>
                        <img src={client2} className="gallery__img"/>
                    </div>
                    <div className="testimonials__client " id="client-3" onClick={this.toggleClient.bind(this)}>
                        <img src={client3} className="gallery__img"/>
                    </div>
                </div>


            </div>
        );
    }
}