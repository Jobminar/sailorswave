import React, { useState } from "react";
import Page3Image from "../../assets/page-3-img.jpeg";
import "./Verification.css";
import SailorsLogo2 from "../../../src/assets/Sailors-Logo-2.png";

const Verification = () => {
  const [timeRemain, setTimeRemain] = useState("00:59");
  return (
    <>
      <div className="row">
        <div className="col left-div">
          <img src={Page3Image} className="image-1" alt="Page 3 Icon" />
        </div>
        <div className="col right-div">
          <img src={SailorsLogo2} className="sailors-logo" alt="SailorsLogo2" />
          <form className="form-div-2 text-center">
            <div className="col">
              <p className="text-1">Verification</p>
              <p className="text-2"
              style={{fontSize:"14px"}}
              >
                Enter your 4 digits code that you received on your email.
              </p>
              <input type="number" className="input-style text-center" />
              <input type="number" className="input-style text-center" />
              <input type="number" className="input-style text-center" />
              <input type="number" className="input-style text-center" />
              <br />
              <br />
              <div style={{color:"red"}}>
              {timeRemain}
              </div>
              <br />
              <button className="adjust-button">CONTINUE</button>
              <br/>
              <br/>
            <p className="text-2" style={{fontSize:"12px"}}>if you didn't receive a code! <span style={{color:"red", fontSize:"12px"}}>Resend</span></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Verification;
