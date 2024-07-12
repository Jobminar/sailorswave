import React from "react";
import "./Navbar.css";
import image1 from "../../assets/Sailor-1.png";
import image2 from "../../assets/Sailor-2.png";
import image3 from "../../assets/Sailor-3.png";
import AnchorLogo from "../../assets/Anchor-icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={image1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={image3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <nav className="navbar-total">
          <i className="fa-anchor">
            <ul className="navclass inria-serif-regular">
              <img id="anchor-logo" src={AnchorLogo} alt="anchor-logo" />
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/About-Us"><li>About us</li></Link>
              <li>Services</li>
              <li>Careers</li>
              <li>Contact us</li>
              <li>Dur fleet</li>
              <Link to="/Signup">
                <li>Login/Signup</li>
              </Link>
            </ul>
          </i>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
