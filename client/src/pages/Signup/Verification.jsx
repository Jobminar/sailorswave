import React, { useRef, useState } from "react";
import Page3Image from "../../assets/page-3-img.jpeg";
import "./Verification.css";
import SailorsLogo2 from "../../../src/assets/Sailors-Logo-2.png";

const Verification = () => {
  const [otp, setOtp] = useState(["","","",""]);
  const [timeRemain, setTimeRemain] = useState("00:59");

  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.match(/^[0-9]$/)) {
      const newOtp = [...otp];
      console.log(newOtp);
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input field if not the last
      if (index < 3) {
        inputRefs.current[index + 1].focus();
      }
    } else {
      // Clear the input if the value is not a digit
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  // const handleKeyDown = (e, index) => {
  //   if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
  //     inputRefs.current[index - 1].focus();
  //   }
  // };

  const submitHandler = (e) => {
    e.preventdefault(); 
    const otpValue = otp.join('');
    console.log('OTP Entered:', otpValue);
    alert("otp sent successfully", otpValue)

    // Add your OTP verification logic here
    
    // For example, you can send the OTP to your backend for verification
  };

  return (
    <>
      <div className="row">
        <div className="col left-div">
          <img src={Page3Image} className="image-1" alt="Page 3 Icon" />
        </div>
        <div className="col right-div">
          <img src={SailorsLogo2} className="sailors-logo" alt="SailorsLogo2" />
          <form onSubmit={submitHandler} className="form-div-2 text-center">
            <div className="col">
              <p className="text-1">Verification</p>
              <p className="text-2"
              style={{fontSize:"14px"}}
              >
                Enter your 4 digits code that you received on your email.
              </p>
              {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => handleChange(e, index)}
            // onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            className="input-style text-center"
          />
        ))}
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
