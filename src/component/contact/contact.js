import React from "react";
import "./contact.css";
import character from "./../../assets/svg/ContactusChar.svg";
import phone from "./../../assets/svg/contact_phone.svg";
import mail from "./../../assets/svg/contact_mail.svg";
import verticalLine from "./../../assets/svg/vertical_line.svg";
import Hline from "./../../assets/svg/contact_Hline.svg";


const Contact=()=>{
    return(
        <div className="contPage">
        <div className="py-5 px-12">
        <div className="contactBg">
        <div className="heading">
            <h1 className="text-white text-center text-4xl md:text-6xl pt-5">Contact Us</h1>
            <img src={Hline} alt="img" className="m-auto mb-3"></img>

        </div>
        <div className="info">
        <div className="md:flex justify-between p-7">
            <div className="phone grid">
                <img src={phone} alt="img" className="m-auto w-10 mb-2"></img>
                <p className="text-white text-xl">+91 23456234567</p>
            </div>
            <img src={verticalLine} alt="img" className="hidden md:block"></img>
            <div className="phone grid">
                <img src={mail} alt="img" className="m-auto w-10 mb-2"></img>
                <p className="text-white text-xl">sparky@support.com</p>
            </div>
        </div>

        </div>
        <div className="Contactform">
        <p className="text-white text-2xl pt-4 text-center mb-1">Leave us a Message</p>
        <img src={Hline} alt="img" className="m-auto w-80 mb-3"></img>
        <form>
        <input type="text" placeholder="Your Name"></input>
        <input type="text" placeholder="Your Email"></input>
        <textarea type="textarea" placeholder="Your Message" rows="5" className="textMessage"></textarea>
        
        </form>
        <div className="content-btn text-center pt-2">
        <button className="text-white font-bold text-center py-2 px-12 align-middle inline-flex  btnlogin">
        Submit
        </button>
        </div>
            
        </div>
        <div className="contactImg hidden xl:block">
            <img src={character} alt="img"></img>
        </div>

        </div>
        </div>
        </div>
        );

}
export default Contact;