import React, {Component} from "react";
import LinkinIcon from "../images/linkedin.svg";
import StackoverflowIcon from "../images/stackoverflow.svg";
import TwitterIcon from "../images/twitter.svg";
import FacebookIcon from "../images/facebook.svg";
import InstagramIcon from "../images/instagram.svg";
import YoutubeIcon from "../images/youtube.svg";
import GithubIcon from "../images/github.svg";
export default class Contact extends Component{
    showLinkedin(){
        window.location.href = "https://www.linkedin.com/in/shehan-a-780622126/";
    }
    showStackoverflow(){
        window.location.href = "https://stackoverflow.com/users/10871450/flyingfishcattle";
    }
    showTwitter(){
        window.location.href = "https://twitter.com/Shehan_Atuk";
    }
    showFacebook(){
        window.location.href = "https://www.facebook.com/shehan.atuk1";
    }
    showInstagram(){
        window.location.href = "https://www.instagram.com/shehanthewebdev/";
    }
    showYoutube(){
        window.location.href = "https://www.youtube.com/channel/UCtxed_NljgtAXrQMMdLvhrQ?view_as=subscriber";
    }
    showGithub(){
        window.location.href = "https://github.com/ShehanAT";
    }

    render(){
        return (
            <div className="contact" id="contact">
                <div className="contact__heading">
                    <h2>Lets Work Together</h2>
                </div>
                <div className="social__section">
                    <img src={LinkinIcon} alt="linkedin icon" className="contact__socials__icons scaleanimation-target " onClick={this.showLinkedin.bind(this)}/>
                    <img src={StackoverflowIcon} alt="stackoverflow icon" className="contact__socials__icons scaleanimation-target " onClick={this.showStackoverflow.bind(this)}/>
                    <img src={TwitterIcon} alt="twitter icon" className="contact__socials__icons scaleanimation-target " onClick={this.showTwitter.bind(this)}/>
                    <img src={FacebookIcon} alt="faebook icon" className="contact__socials__icons scaleanimation-target " onClick={this.showFacebook.bind(this)}/>
                    <img src={InstagramIcon} alt="instagram icon" className="contact__socials__icons scaleanimation-target " onClick={this.showInstagram.bind(this)}/>
                    <img src={YoutubeIcon} alt="youtube icon" className="contact__socials__icons scaleanimation-target " onClick={this.showYoutube.bind(this)}/>
                    <img src={GithubIcon} alt="github icon" className="contact__socials__icons scaleanimation-target " onClick={this.showGithub.bind(this)}/>
                </div>
                <hr/>
                
                <form className="contact__form" method="POST" action="//formspree.io/shehanatuk@gmail.com">
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
    
                </form>

            </div>
        );
    }


}