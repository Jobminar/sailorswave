import React from "react";
import emailIcon from "../../assets/Email-icon.png";
import phoneIcon from "../../assets/Phone-icon.png";
import "./Header.css";
import logo from "../../assets/1718874363913-bca6d93e-4b8d-4b70-8ec7-6059cf41a7481_1-removebg-preview 1.png";

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
            <span>91 9876543210</span>
          </div>
          <button className="apply-btn">Apply now</button>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Header;
