import React, { useState } from "react";
import { useNavigate, redirect} from "react-router-dom";
import "./Signup.css";
import Page2Image from "../../assets/page-2-img.jpeg";

const Login = () => {
  const [formData, setFormData] = useState({
    candidateName: "",
    mobileNumber: "",
    otp:"",
    otpExpiry:""
  });
  
  const Navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  

  const submitHandler = async (e) => {
    e.preventDefault();
    
    console.log("Form Data Submitted:", formData);
    try {
      const response = await fetch("http://localhost:4000/user/createUser", {
        method: "POST",
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Response from backend:", data);
        if (response.status === 201) {
          console.log(response);
          Navigate("/generate-otp");
          Navigate("/Verification");
          // alert("data validated successfully");
        } else {
          alert('Failed to submit form');
        }
    } catch (error) {
      console.error("Error:",error)
    }
  };


  return (
    <>
      <div className="row">
        <div className="image-container">
          <img src={Page2Image} className="image-left" alt="Ship" />
        </div>
        <div className="form-container">
          <h1 className="heading-1">Welcome to SAILORSWAVE</h1>
          <br />
          <form onSubmit={submitHandler} className="form-2">
            <div>
              <label className="label-1">Full Name</label>
              <input
                type="text"
                name="candidateName"
                value={formData.candidateName}
                onChange={handleChange}
                placeholder="John Doe"
                className="input-1"
              />
            </div>
            <div>
              <label className="label-1">
                Phone number<span className="span-color">*</span>
              </label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="Phone number"
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

export default Login;
