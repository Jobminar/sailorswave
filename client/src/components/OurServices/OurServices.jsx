import React from 'react';
import Vector1 from "../../assets/Vector-1.png"
import Vector2 from "../../assets/Vector-2.png"
import Vector3 from "../../assets/Vector-3.png"
import "./OurServices.css";


const OurServices = () => {
  return (
    <>
      <div>
        <h4 class="text-center">OurServices</h4>
        <br/>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div class="card cart-total" >
                <br />
                <img src={Vector1} className=" card-img-top rounded mx-auto d-block" style={{ height: "2rem", width: "2rem" }} alt="Vector1" />
                <br />
                <h5 class="card-title">Card title</h5>
                <div class="card-body">
                  <p class="card-text">At Sailorswave, we understand the importance of efficient onshore operations</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card cart-total">
                <br />
                <img src={Vector2} className=" card-img-top rounded mx-auto d-block" style={{ height: "2rem", width: "2rem" }} alt="image" />
                <br />
                <h5 class="card-title">Card title</h5>
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card cart-total">
                <br />
                <img src={Vector3} className="card-img-top rounded mx-auto d-block" style={{ height: "2rem", width: "2rem" }} alt="image" />
                <br />
                <h5 class="card-title">Card title</h5>
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default OurServices
