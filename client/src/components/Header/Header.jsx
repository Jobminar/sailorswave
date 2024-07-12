import React from "react";
import { Link } from "react-router-dom";
import emailIcon from "../../assets/Email-icon.png";
import phoneIcon from "../../assets/Phone-icon.png";
import "./Header.css";
import logo from "../../assets/Sailors-Logo.png";
import Signup from "../../pages/Signup/Signup";

const Header = () => {
  return (
    <>
      <div className="float-contains">
        <div className="logo">
          <img src={logo} alt="Sailors Wave Logo" />
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <img src={emailIcon} alt="Email Icon" />
            <span>sailorswaveshipmanagement@gmail.com</span>
          </div>
          <div className="contact-item">
            <img src={phoneIcon} alt="Phone Icon" />
            <span>+91 9876543210</span>
          </div>
          <button className="apply-btn">Apply now</button>
        </div>
        <div></div>
      </div>

      {/* <div className="row mobile-header">
        <div className="logo"> 
        <img src={logo}  alt="Sailors-Wave Logo" />
        </div>
        <button className="apply-btn">Apply now</button>
      </div> */}
      <br/>
    </>
  );
};

export default Header;
