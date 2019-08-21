import React, {Component} from "react";
import leftIcon from "../images/leftIcon.svg";
import rightIcon from "../images/rightIcon.svg";
import client1 from "../images/tmpClient1.jpg";
import client2 from "../images/tmpClient2.jpg";
import client3 from "../images/tmpClient3.jpg";

export default class Testimonials extends Component{
    constructor(){
        super();
        this.state ={
            clientInfo: [
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
        }
    }
    arrowToggleClient = e => {
        //id of the previous client
        
        var arrowDirection = e.currentTarget.id;
        //remove .active-client from previous client
        var prevClient = document.querySelectorAll(".active-client").item(0);
        prevClient.classList.remove("active-client");
        var prevId = parseInt(prevClient.id.slice(7));
        switch(arrowDirection){
            case "left-arrow":
                if(prevId === 1){
                    //going from client 1 to client 3, 0 because prevId is zero-indexed
                    this.switchClient(3);
                }else{
                    //zero 
                    this.switchClient(prevId - 1);
                }
                break;
            case "right-arrow":
                if(prevId === 3){
                    this.switchClient(1);
                }else{
                    this.switchClient(prevId + 1);
                }
                break;
            default:
                break;
        }
        // console.log(prevClient[0].attributes.id);
    }
    switchClient = nextClientId => {
        console.log(nextClientId);
        var activePic= document.getElementById("testimonials__profile__img");
        var  activeBlurb = document.getElementById("testimonials__profile__blurb");
        var activeName = document.getElementById("testimonials__profile__name");
        var activeJob = document.getElementById("testimonials__profile__job");
        var client = document.getElementById("client-"+nextClientId);
        client.classList.add("active-client");
        activePic.src = this.state.clientInfo[nextClientId - 1]["img-src"];
        activeBlurb.textContent = this.state.clientInfo[nextClientId -1 ]["blurb"];
        activeName.textContent = this.state.clientInfo[nextClientId -1 ]["name"];
        activeJob.textContent = this.state.clientInfo[nextClientId - 1 ]["job"];
        console.log("passing1");
    }
    toggleClient = e => {
        var clientId = parseInt(e.currentTarget.id.slice(7)) - 1;//eliminate zero-indexing
        if(document.querySelectorAll(".active-client")){
            //toggle between clients on client profile pic click
            var prevClicnt = document.querySelectorAll(".active-client");
            prevClicnt.item(0).classList.remove("active-client");
            var activePic= document.getElementById("testimonials__profile__img");
            var  activeBlurb = document.getElementById("testimonials__profile__blurb");
            var activeName = document.getElementById("testimonials__profile__name");
            var activeJob = document.getElementById("testimonials__profile__job");
            
            activePic.src = this.state.clientInfo[clientId]["img-src"];
            activeBlurb.textContent = this.state.clientInfo[clientId]["blurb"];
            activeName.textContent = this.state.clientInfo[clientId]["name"];
            activeJob.textContent = this.state.clientInfo[clientId]["job"];

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
                        <img src={leftIcon} className="testimonials__leftArrow arrow" id="left-arrow" onClick={this.arrowToggleClient.bind(this)} alt="left arrow icon"/>
                    </div>
                    <div className="testimonials__main-content">
                    <div className="profile__info">
                    <img src={client1} className="testimonials__profile__img " id="testimonials__profile__img" alt="active client"/>
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
                        <img  src={rightIcon} className="testimonials__rightArrow arrow" id="right-arrow" onClick={this.arrowToggleClient.bind(this)} alt="right arrow icon"/>
                    </div>
                </div>
                <div className="testimonials__gallery">
                    <div className="testimonials__client active-client"  id="client-1" onClick={this.toggleClient.bind(this)}>
                        <img src={client1} className="gallery__img" alt="client 1 icon"/>
                    </div>
                    <div className="testimonials__client" id="client-2" onClick={this.toggleClient.bind(this)}>
                        <img src={client2} className="gallery__img" alt="client 2 icon"/>
                    </div>
                    <div className="testimonials__client " id="client-3" onClick={this.toggleClient.bind(this)}>
                        <img src={client3} className="gallery__img" alt="client 3 icon"/>
                    </div>
                </div>


            </div>
        );
    }
}