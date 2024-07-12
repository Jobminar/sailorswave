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
        <div className="text-center">
          <h4>APPLICATION FORM FOR MERCHANT NAVY</h4>
          <h4>APPLICATION FOR ADMISSION IN MARINE TRAINING</h4>
        </div>
        <br />
        <form className="form-total-1">
          <br />
          <p className="side-header">PERSONAL DETAILS</p>
          <div className="row container text-start">
            <div className="col">
              <div>
                <label className="candidate-label">Candidate Name</label>
                <br />
                <input
                  type="text"
                  className="input-width"
                  placeholder="Input Text"
                />
              </div>
              <div>
                <label className="candidate-label">Date of birth</label>
                <br />
                <input
                  type="date"
                  className="input-width"
                  placeholder="DD-MM-YY"
                />
              </div>
              <div>
                <label className="candidate-label">Mobile number</label>
                <br />
                <input
                  type="number"
                  className="input-width"
                  placeholder="+91 9848226644"
                />
              </div>
            </div>
            <div className="col">
              <div>
                <label className="candidate-label">Father name</label>
                <br />
                <input
                  type="text"
                  className="input-width"
                  placeholder="Input Text"
                />
              </div>
              <div>
                <label className="candidate-label">Gender</label>
                <br />
                <select className="input-width">
                  <option placeholder="Male">Male</option>
                  <option placeholder="Female">Female</option>
                </select>
              </div>
              <div>
                <label className="candidate-label">Email Id</label>
                <br />
                <input
                  type="email"
                  className="input-width"
                  placeholder="Example@gmail.com"
                />
              </div>
            </div>
          </div>
          <br />

          {/* akshaya _________________________________________ */}

          <p className="side-header">ADDRESS OF CANDIDATES</p>
          <div className="row container">
            <div className="col">
              <div className="form-group">
                <label>House number</label>
                <br />
                <input
                  type="text"
                  className="input-width"
                  placeholder="Input Text"
                />
              </div>
              <div className="form-group">
                <label>Police station*</label>
                <br />
                <input
                  type="text"
                  className="input-width"
                  placeholder="Input Text"
                />
              </div>
              <div className="form-group">
                <label>Select city</label>
                <br />
                <select className="input-width">
                  <option>Select city</option>
                </select>
              </div>
              <div className="form-group">
                <label>Pincode</label>
                <input
                  type="text"
                  className="input-width"
                  placeholder="Input field"
                />
              </div>
            </div>
            <div className="col ">
              <div className="form-group-1">
                <label>Post office*</label>
                <br />
                <input
                  type="text"
                  className="input-width"
                  placeholder="Input Text"
                />
              </div>

              <div className="form-group-1">
                <label>District*</label>
                <br />
                <input
                  type="text"
                  className="input-width"
                  placeholder="Input Text"
                />
              </div>

              <div className="form-group-1">
                <label>Select state</label>
                <br />
                <select className="input-width">
                  <option>Select city</option>
                </select>
              </div>
            </div>
          </div>
          <br />
          <p className="side-header">EDUCATIONAL QUALIFICATION</p>
          <div className="row container">
            <div className="col">
              <p>Exam passed</p>
              <p className="input-width-2">10th</p>
              <p className="input-width-2">12th</p>
              <p className="input-width-2">ITI/Diploma</p>
            </div>
            <div className="col">
              <p>School/college</p>
              <input type="text" className="input-width-2" />
              <input type="text" className="input-width-2" />
              <input type="text" className="input-width-2" />
            </div>
            <div className="col">
              <p>Year of passing</p>
              <input type="text" className="input-width-2" />
              <input type="text" className="input-width-2" />
              <input type="text" className="input-width-2" />
            </div>
            <div className="col">
              <p>Percentage%</p>
              <input type="text" className="input-width-2" />
              <input type="text" className="input-width-2" />
              <input type="text" className="input-width-2" />
            </div>
          </div>
          {/* shivani _________________________________________ */}
        </form>
      </div>
    </>
  );
};

export default ApplicationPage;
