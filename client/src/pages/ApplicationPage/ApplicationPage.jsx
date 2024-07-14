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
          <h4 className="application">APPLICATION FORM FOR MERCHANT NAVY</h4>
          <h4 className="application">APPLICATION FOR ADMISSION IN MARINE TRAINING</h4>
        </div>
        <br />
        <form className="form-total-1">
          <br />
          <p className="side-header">&nbsp;&nbsp;PERSONAL DETAILS</p>
          <div className="apply-section">
        <label htmlFor="post-select">Apply for post</label>
        <select id="post-select">
          <option value="" disabled selected>Select for post</option>
        </select>
        </div><br />
          <div className="row container text-start">
            <div className="col">
              <div>
                <label className="candidate-label">Candidate Name<span className="red">*</span></label>
                <br />
                <input
                  type="text"
                  className="input-width1"
                  placeholder="Input Text"
                />
              </div>
              <div>
                <label className="candidate-label">Date of birth<span className="red">*</span></label>
                <br />
                <input
                  type="date"
                  className="input-width1"
                  placeholder="DD-MM-YY"
                />
              </div>
              <div>
                <label className="candidate-label">Mobile number</label>
                <br />
                <input
                  type="number"
                  className="input-width1"
                  placeholder="+91 9848226644"
                />
              </div>
            </div>
            <div className="col">
              <div>
                <label className="candidate-label">Father name<span className="red">*</span></label>
                <br />
                <input
                  type="text"
                  className="input-width1"
                  placeholder="Input Text"
                />
              </div>
              <div>
                <label className="candidate-label">Gender</label>
                <br />
                <select className="input-width1">
                  <option className="form-option" placeholder="Male">Male</option>
                  <option className="form-option" placeholder="Female">Female</option>
                </select>
              </div>
              <div>
                <label className="candidate-label">Email Id</label>
                <br />
                <input
                  type="email"
                  className="input-width1"
                  placeholder="Example@gmail.com"
                />
              </div>
            </div>
          </div>
          <br />

          {/* akshaya _________________________________________ */}

          <p className="side-header1">ADDRESS OF CANDIDATES</p>
          <div className="row container candidate-address">
            <div className="col">
              <div className="form-group">
                <label className="candidate-label">House number</label>
                <br />
                <input
                  type="text"
                  className="input-width1"
                  placeholder="Input Text"
                />
              </div>
              <div className="form-group">
                <label className="candidate-label">Police station<span className="red">*</span></label>
                <br />
                <input
                  type="text"
                  className="input-width1"
                  placeholder="Input Text"
                />
              </div>
              <div className="form-group">
                <label className="candidate-label">Select city</label>
                <br />
                <select className="input-width1">
                  <option className="form-option">Select city</option>
                </select>
              </div>
              <div className="form-group-1">
                <label className="candidate-label">Pincode</label>
                <input
                  type="text"
                  className="input-width1"
                  placeholder="Input field"
                />
              </div>
            </div>
            <div className="col ">
              <div className="form-group">
                <label className="candidate-label">Post office<span className="red">*</span></label>
                <br />
                <input
                  type="text"
                  className="input-width1"
                  placeholder="Input Text"
                />
              </div>

              <div className="form-group-1">
                <label className="candidate-label">District<span className="red">*</span></label>
                <br />
                <input
                  type="text"
                  className="input-width1"
                  placeholder="Input Text"
                />
              </div>

              <div className="form-group-1">
                <label className="candidate-label">Select state</label>
                <br />
                <select className="input-width1">
                  <option className="form-option">Select city</option>
                </select>
              </div>
            </div>
          </div>
          <br />
          <p className="side-header1">EDUCATIONAL QUALIFICATION</p>
          <div className="row container">
            <div className="col">
              <p className="group-label1">Exam passed</p>
              <p className="input-width-2">10th</p>
              <p className="input-width-2">12th</p>
              <p className="input-width-2">ITI/Diploma</p>
            </div>
            <div className="col">
              <p className="group-label1">School/college</p>
              <input type="text" className="input-width-2" />
              <input type="text" className="input-width-2" />
              <input type="text" className="input-width-2" />
            </div>
            <div className="col">
              <p className="group-label1">Year of passing</p>
              <input type="text" className="input-width-2" />
              <input type="text" className="input-width-2" />
              <input type="text" className="input-width-2" />
            </div>
            <div className="col">
              <p className="group-label1">Percentage%</p>
              <input type="text" className="input-width-2" />
              <input type="text" className="input-width-2" />
              <input type="text" className="input-width-2" />
            </div>
          </div>
          {/* shivani _________________________________________ */}
          <div className="container11">
    <p className="upload11">UPLOAD PICTURE (*Select image of less than 2MB)</p>
    <form>
      <div className="form-group">
        <label  className="form-label1"htmlFor="passport">
          Upload your passport size picture (.jpg)
        </label>
        <input className="input1" type="file" id="passport" name="passport" />
      </div>
      <hr />
      <div className="form-group">
        <label className="form-label1" htmlFor="certificate">
          Upload your class 10th certificate (.jpg)
        </label>
        <input
          className="input1"
          type="file"
          id="certificate"
          name="certificate"
        />
      </div>
      <hr />
      <div className="form-group">
        <label className="form-label1" htmlFor="aadhar">Upload your Aadhar card (.jpg)</label>
        <input className="input1" type="file" id="aadhar" name="aadhar" />
      </div>
      <hr />
      <div className="declaration">
        <p className="declare-heading">DECLARATION:</p>
        <p className="declare11">
          I declare that the particular furnished above are true to the best of
          my knowledge and belief and whenever called for the records shall be
          furnished.
        </p>
      </div>
      <button className="form-submit" type="submit">SUBMIT</button>
    </form> 
  </div>
        </form>
        </div>

    </>
  );
};

export default ApplicationPage;
