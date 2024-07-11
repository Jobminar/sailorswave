import React from "react";
import "../ApplicationPage/ApplicationPage.css";
import emailIcon from "../../assets/Email-icon.png";
import phoneIcon from "../../assets/Phone-icon.png";
import logo from "../../assets/Sailors-Logo.png";

const ApplicationPage = () => {
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
        </div>
      </div>

      <div className="form-div col">
        <br />
        <br />
        <div className="text-center">
          <h2>APPLICATION FORM FOR MERCHANT NAVY</h2>
          <h2>APPLICATION FOR ADMISSION IN MARINE TRAINING</h2>
        </div>
        <br />
        <br />
        <form className="form-total-1">
          <p className="personal-details">PERSONAL DETAILS</p>
          <label className="candidate-label">Candidate Name</label>
          <br />
          <input type="text" />
          {/* Akshaya _________________________________________ */}

          <div>
            <label></label>
            <input />
          </div>
          {/* Shivani _________________________________________ */}

          <div>
            <label></label>
            <input />
          </div>
        </form>
      </div>
    </>
  );
};

export default ApplicationPage;
