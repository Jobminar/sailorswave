import React from "react";
import emailIcon from "../../assets/Email-icon.png";
import phoneIcon from "../../assets/Phone-icon.png";
import "./Header.css";
import logo from "../../assets/Sailors-Logo.png";

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
      <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="light">
  <div class="bg-light p-1">
    <h5 class="text-body-emphasis h6">Home</h5>
    <h5 class="text-body-emphasis h6">About Us</h5>
    <h5 class="text-body-emphasis h6">Services</h5>
    <h5 class="text-body-emphasis h6">Careers</h5>
    <h5 class="text-body-emphasis h6">Contact Us</h5>
    <h5 class="text-body-emphasis h6">Dur Fleet</h5>
    <h5 class="text-body-emphasis h6">Login/SignUp</h5>
    <span class="text-body-secondary"></span>
  </div>
</div>
<nav class="navbar navbar-light bg-light mobile-navbar">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
  </div>
  <div className="logo">
          <img src={logo} alt="Sailors Wave Logo" />
  </div>
    <button className="apply-btn">Apply now</button>
</nav>
    </>
  );
};

export default Header;
