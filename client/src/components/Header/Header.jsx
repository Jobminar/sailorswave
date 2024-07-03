import React from "react";
import image1 from "../../assets/Sailor-1.png";
import image2 from "../../assets/Sailor-2.png";
import image3 from "../../assets/Sailor-3.png";
import emailIcon from "../../assets/Email-icon.png";
import phoneIcon from "../../assets/Phone-icon.png";
import "./Header.css";
import logo from "../../assets/1718874363913-bca6d93e-4b8d-4b70-8ec7-6059cf41a7481_1-removebg-preview 1.png";

const Header = () => {
  return (
    <>
      <div className="float-container">
        <div className="logo">
          <img src={logo} alt="Sailors Wave Logo" />
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <img src={emailIcon} alt="Email Icon" />
            <span>sailorswaveshipmanagement@gmail.com</span>
          </div>
          <div className="contact-item">
            <img src={phoneIcon} alt="Phone Icon" />
            <span>91 9876543210</span>
          </div>
          <button className="apply-btn">Apply now</button>
        </div>
        <div></div>
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
                <img src={image1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={image2} className="d-block w-100" alt="..." />
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
        </div>
      </div>
    </>
  );
};

export default Header;
