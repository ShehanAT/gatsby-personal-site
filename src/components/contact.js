import React, {Component} from "react";
import LinkinIcon from "../images/linkedin.svg";
import StackoverflowIcon from "../images/stackoverflow.svg";
import TwitterIcon from "../images/twitter.svg";
import FacebookIcon from "../images/facebook.svg";
import InstagramIcon from "../images/instagram.svg";
import YoutubeIcon from "../images/youtube.svg";
import GithubIcon from "../images/github.svg";
import ContactBackground from "../images/ContactBackground.svg";
export default class Contact extends Component{

    render(){
        return (
            <div className="contact">
                {/* <img src={ContactBackground} className="contact__background" /> */}
                <div className="contact__heading">
                    <h2>Lets Work Together</h2>
                </div>
                <div className="social__section">
                    <img src={LinkinIcon} alt="linkedin icon" className="contact__socials__icons"/>
                    <img src={StackoverflowIcon} alt="stackoverflow icon" className="contact__socials__icons"/>
                    <img src={TwitterIcon} alt="twitter icon" className="contact__socials__icons"/>
                    <img src={FacebookIcon} alt="faebook icon" className="contact__socials__icons"/>
                    <img src={InstagramIcon} alt="instagram icon" className="contact__socials__icons"/>
                    <img src={YoutubeIcon} alt="youtube icon" className="contact__socials__icons"/>
                    <img src={GithubIcon} alt="github icon" className="contact__socials__icons"/>
                </div>
                <hr/>
                
                <div className="contact__form">
                <h2 className="contact__form__heading">Contact Me</h2>
                    <div className="contact__details">
                        <label htmlFor="name" className="contact__details__name"><span>Your Name</span>
                            <input name="name" id="contact__name" className="contact__name" type="text" />
                        </label>
                        <label htmlFor="email" className="contact__details__email"><span>Your Email</span>
                            <input name="email" id="contact__email" className="contact__email" type="text" />
                        </label>
                    </div>
                    <div className="contact__message">
                        <label htmlFor="message" className="contact__message__label"><span>Your Message</span>
                            <textarea name="message" id="contact__message__textarea" className="contact__message" type="text" />
                        </label>
                    </div>
                    <div className="contact__submit">
                            <input type="submit" value="Send"/>
                    </div>
    
                </div>

            </div>
        );
    }


}