import React from "react";
import Commander4 from "../../assets/Commander-4.png";
import AnchorLogo from "../../assets/Anchor-icon.png";
import "./About.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <i className="fa-anchor">
          <ul className="navclass">
            <img id="anchor-logo" src={AnchorLogo} alt="anchor-logo" />
            <li className="inria-serif-regular">Home</li>
            <li className="inria-serif-regular">About us</li>
            <li className="inria-serif-regular">Services</li>
            <li className="inria-serif-regular">Careers</li>
            <li className="inria-serif-regular">Contact us</li>
            <li className="inria-serif-regular">Dur fleet</li>
            <li className="inria-serif-regular">Login/Signup</li>
          </ul>
        </i>
      </nav>
      <div className="total_about">
        <div className="about_us">
          <p id="about">About Us</p>
          <div className="para">
<<<<<<< HEAD
            Welcome to Sailors wave Sameer gorrepati Pvt Ltd, your trusted
=======
            Welcome to Sailors kamal wave Shipment Management Pvt Ltd, your trusted
>>>>>>> kamal
            partner in comprehensive maritime solutions. Established in 2022,
            Sailors wave is dedicated to delivering top-tier services in onshore
            resource management, offshore resource management, training, and
            placements. Our mission is to support and enhance the global
            maritime industry by providing innovative and reliable solutions
            tailored to meet the unique needs of our clients
          </div>
          <div className="buttons">
            <button id="button1">Contact Us</button>
            <button id="button2">Apply Now</button>
          </div>
        </div>
        <img className="sailors" src={Commander4} />
      </div>
    </>
  );
};

export default Navbar;
