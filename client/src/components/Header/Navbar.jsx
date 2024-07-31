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
<nav className="navbar navbar-light bg-light mobile-navbar">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      
    </button>
   
  </div>
  <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="light">
  <div className="bg-light p-1">
    <h5 className="text-body-emphasis h6">Home</h5>
    <h5 className="text-body-emphasis h6">About Us</h5>
    <h5 className="text-body-emphasis h6">Services</h5>
    <h5 className="text-body-emphasis h6">Careers</h5>
    <h5 className="text-body-emphasis h6">Contact Us</h5>
    <h5 className="text-body-emphasis h6">Dur Fleet</h5>
    <h5 className="text-body-emphasis h6"><Link to="/Login">Login/SignUp</Link></h5>
    <span className="text-body-secondary">a</span>
  </div>
</div>
</nav>
{/* collapse */}
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
