import React, { useState } from "react";
import "./Footer.css";
import FooterSlide from "../../assets/Footer-Slide-1.png";
import FooterSailorsLogo from "../../assets/Footer-Sailors-Logo.png";
import EmailIcon2 from "../../assets/Email-icon-2.png";
import SocialIcon1 from "../../assets/Social-icon-1.png";
import SocialIcon2 from "../../assets/Social-icon-2.png";
import SocialIcon3 from "../../assets/Social-icon-3.png";
import SocialIcon4 from "../../assets/Social-icon-4.png";
import SocialIcon5 from "../../assets/Social-icon-5.jpeg";
import SocialIcon6 from "../../assets/Social-icon-6.jpeg";

const Footer = () => {
const [email, setEmail] = useState("");

const handleChange = (e)=> {
  setEmail(e.target.value);
}
const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent default form submission
console.log(email)
  // try {
  //   // Send the email to the backend
  //   const response = await fetch("http://localhost:4000/subscribe", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email }),
  //   });

  //   if (response.ok) {
  //     alert("Subscription successful!");
  //     setEmail(""); // Clear the input field
  //   } else {
  //     alert("Subscription failed. Please try again.");
  //   }
  // } catch (error) {
  //   console.error("Error during subscription:", error);
  //   alert("An error occurred. Please try again.");
  // }
};
  return (
    <>
      <br />
      <br />
      <div className="row total">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col email-container">
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              className="text-white email-input bg-dark"
              placeholder="Please Enter your email"
            />
            <img src={EmailIcon2} alt="Email Icon" className="email-icon bg-dark" />
          </div>
          <div className="col">
            <button type="submit" className="subscribe">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </form>
        <div className="col">
          <img
            className="sailors_wave"
            src={FooterSailorsLogo}
            alt="sailors-wave"
          />
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <p className="heading">COMPANY</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item list">About Us</li>
                <li className="list-group-item list">Reviews</li>
                <li className="list-group-item list">Contact Us</li>
                <li className="list-group-item list">Careers</li>
              </ul>
            </div>
            <div className="col services-div2">
              <ul className="list-group list-group-flush">
                <p className="heading">Our Services</p>
                <li className="list-group-item list">On shore Joining</li>
                <li className="list-group-item list">off shore Joining</li>
                <li className="list-group-item list">Training</li>
                <li className="list-group-item list">Placements</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="follow">Follow Us</div>
          <div className="row icon-row">
            <div className="col icons">
              <img src={SocialIcon1} />
            </div>
            <div className="col icons">
              <img src={SocialIcon2} />
            </div>
            <div className="col icons">
              <img src={SocialIcon3} />
            </div>
            <div className="col icons">
              <img src={SocialIcon4} />
            </div>
          </div>
          <div className="text-center ms-5 follow">&nbsp; Download our App</div>
          <div className="row icon-row">
            <div className="col icons">
              <img src={SocialIcon5} />
            </div>
            <div className="col icons">
              <img src={SocialIcon6} />
            </div>
          </div>
        </div>
        <img className="image-control " src={FooterSlide} />
      </div>
    </>
  );
};

export default Footer;
