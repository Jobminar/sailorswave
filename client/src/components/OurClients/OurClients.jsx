import React from "react";
import "./OurClients.css";
import GrassLeft from "../../assets/Grass-Left.png";
import GrassRight from "../../assets/Grass-Right.png";

import Photo16 from "../../assets/Photo-16.png";
import Frame from "../../assets/Frame-1.png";
import Star from "../../assets/5star.png"

const OurClients = () => {
  return (
    <>
     
      <div className="div-background">
       
        <div className="jumbotron text-center  text-white">
          <h5 className="display-4 title-text-1">
            What Our Clients Say About Us
          </h5>
          
          <div className="review-container">
            <div className="review-top-con">
              <div >
                <img src={GrassLeft} className="feather1" alt="feather-1-image"/>
              </div>
              <div >
                <p id="rating">5.0 User Rating </p>
                <img src={Star} className="star-mobile" alt="star-icon"/>
              </div>
              <div >
                <img src={GrassRight} className="feather2"  alt="feather-2-image"/>
              </div>
            </div>
            <div className="review-bottom-con"> 
              <p className="helping">
                Helping 4,000 Peoples take beautiful screenshots everyday
              </p>
              <div className="m-clients">
                <img src={Frame} alt="..."  />
              </div>
            </div>
            
          </div>
        </div>


       {/* cards with highlight animation */}
      

        <div className="clients-con">
            <div className="clients-sub-con">
              <div className="clients-top">
                 <div className="card-image">
                    <img src={Photo16} alt="profile-icon"/>
                  </div>
                  <div className="clients-title">
                    <p>Leo</p>
                    <p>Lead designer</p>
                  </div>
                  <div className="star-image">
                      <img src={Star} alt="star"/>
                  </div>
              </div> 
              <div className="clients-bottom">
              <p className="experience">It was a very good experience</p>
              <p className="card-text-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Faucibus venenatis felis id augue sit cursus pellentesque enim
                arcu. Elementum felis magna pretium in tincidunt. Suspendisse
                sed magna eget nibh in turpis. Consequat duis diam lacus arcu.
              </p>
              </div>   
            </div>
            <div className="clients-sub-con">
              <div className="clients-top">
                 <div className="card-image">
                    <img src={Photo16} alt="profile-icon"/>
                  </div>
                  <div className="clients-title">
                    <p>Leo</p>
                    <p>Lead designer</p>
                  </div>
                  <div className="star-image">
                      <img src={Star} alt="star"/>
                  </div>
              </div> 
              <div className="clients-bottom">
              <p className="experience">It was a very good experience</p>
              <p className="card-text-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Faucibus venenatis felis id augue sit cursus pellentesque enim
                arcu. Elementum felis magna pretium in tincidunt. Suspendisse
                sed magna eget nibh in turpis. Consequat duis diam lacus arcu.
              </p>
              </div>   
            </div>
            <div className="clients-sub-con">
              <div className="clients-top">
                 <div className="card-image">
                    <img src={Photo16} alt="profile-icon"/>
                  </div>
                  <div className="clients-title">
                    <p>Leo</p>
                    <p>Lead designer</p>
                  </div>
                  <div className="star-image">
                      <img src={Star} alt="star"/>
                  </div>
              </div> 
              <div className="clients-bottom">
              <p className="experience">It was a very good experience</p>
              <p className="card-text-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Faucibus venenatis felis id augue sit cursus pellentesque enim
                arcu. Elementum felis magna pretium in tincidunt. Suspendisse
                sed magna eget nibh in turpis. Consequat duis diam lacus arcu.
              </p>
              </div>   
            </div>
        </div>
      </div>
    </>
  );
};

export default OurClients;
