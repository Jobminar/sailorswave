import React from 'react';
import "../Login/Signup.css"
import Page2Image from "../../assets/page-2-img.jpeg";

const Signup = () => {
    return (
        <>
      <div className="container">
      <div className="image-container">
        <img src={Page2Image} alt="Ship" />
      </div>
      <div className="form-container">
        <h1>Welcome to SAILORSWAVE</h1>
        <form>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="John Doe" />
          
          <label htmlFor="phone">Phone number<span>*</span></label>
          <input type="text" id="phone" name="phone" placeholder="Enter your Phone number" />
          
          <button type="submit">GET OTP</button>
        </form>
      </div>
    </div>
    </>
    )
}

export default Signup;





