import React from "react";
import image1 from "../../assets/Rectangle 4 (1).png";
import image2 from "../../assets/Rectangle 4 (2).png";
import image3 from "../../assets/Rectangle 4 (3).png";
import image5 from "../../assets/Group 1 (1).png";
import image6 from "../../assets/Group 2.png";
import "./Header.css";
import logo from "../../assets/1718874363913-bca6d93e-4b8d-4b70-8ec7-6059cf41a7481_1-removebg-preview 1.png";

const Header = () => {
  return (
    <>
      <div className="float-container">
        <div className="logo">
          <img src={logo} alt="Sailors Wave Logo" />
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <img src={image5} alt="Email Icon" />
            <span>sailorswaveshipmanagement@gmail.com</span>
          </div>
          <div className="contact-item">
            <img src={image6} alt="Phone Icon" />
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
