import React from "react";
import "../Signup/Signup.css";
import Page2Image from "../../assets/page-2-img.jpeg";

const Signup = () => {
  const handleSubmit = {};
  return (
    <>
      <div className="row">
        <div className="image-container">
          <img src={Page2Image} className="image-left" alt="Ship" />
        </div>
        <div className="form-container">
          <h1 className="heading-1">Welcome to SAILORSWAVE</h1>
          <br />
          <form className="form-2" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="label-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="input-1"
              />
            </div>
            <div>
              <label htmlFor="name" className="label-1">
                Phone number<span className="span-color">*</span>
              </label>
              <input
                type="number"
                id="name"
                name="name"
                placeholder="Enter your Phone number"
                className="input-1"
              />
            </div>
            <br />
            <button type="submit" className="button-1">
              GET OTP
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
