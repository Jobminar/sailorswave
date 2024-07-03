import React from 'react'
import image1 from "../../assets-sailor/Rectangle 4 (1).png";
import image2 from "../../assets-sailor/Rectangle 4 (2).png";
import image3 from "../../assets-sailor/Rectangle 4 (3).png";
import image4 from "../../assets-sailor/unsplash_mpN7xjKQ_Ns.png";
import "./About.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <i className="fa-anchor">
          <ul className='navclass'>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Careers</li>
            <li>Contact us</li>
            <li>Dur fleet</li>
            <li>Login/Signup</li>
          </ul>
        </i>
      </nav>
      <div className="total_about">
        <div className="about_us">
          <p id="about">About Us</p>
          <div className="para">Welcome to Sailors wave Shipment Management Pvt Ltd, your trusted partner in comprehensive
            maritime solutions. Established in 2022, Sailors wave is dedicated to delivering top-tier services in onshore
            resource management, offshore resource management, training, and placements. Our mission is to support and
            enhance the global maritime industry by providing innovative and reliable solutions tailored to meet the
            unique needs of our clients</div>
          <div className="buttons">
            <button id="button1">Contact Us</button>
            <button id="button2">Apply Now</button>
          </div>
        </div>
        <img className="sailors" src={image4}  />
      </div>
    </>

  )
}

export default Navbar
