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
     
      <div className="form-div">
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

          {/* akshaya _________________________________________ */}

          <div className="address-details">
          <h3>ADDRESS OF CANDIDATES</h3>
          <div className="form-group">
            <label>House number</label>
            <input type="text" placeholder="Input Text" />
          </div>
          <div className="form-group-1">
            <label>Post office*</label>
            <input type="text" placeholder="Input Text" />
          </div>
          <div className="form-group">
            <label>Police station*</label>
            <input type="text" placeholder="Input Text" />
          </div>
          <div className="form-group-1">
            <label>District*</label>
            <input type="text" placeholder="Input Text" />
          </div>
          <div className="form-group">
            <label>Select city</label>
            <select>
              <option>Select city</option>
            </select>
          </div>
          <div className="form-group-1">
            <label>Select state</label>
            <select>
              <option>Select city</option>
            </select>
          </div>
          <div className="form-group">
            <label>Pincode</label>
            <input type="text" placeholder="Input field" />
          </div>
        </div>


          {/* shivani _________________________________________ */}
          <div>
            <label></label>
            <input/>
          </div>
        </form>
      </div>
    </>
  );
};

export default ApplicationPage;
