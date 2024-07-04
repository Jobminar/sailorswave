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
        <br />
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div class="card cart-total" >
                <br />
                <img src={Vector1} className=" card-img-top rounded mx-auto d-block" style={{ height: "2rem", width: "2rem" }} alt="Vector1" />
                <br />
                <h5 class="card-title">On Shore Joining's</h5>
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
                <h5 class="card-title">Off Shore Joining's</h5>
                <div class="card-body">
                  <p class="card-text">Our offshore resource management services are designed to support the complex needs of offshore operations</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card cart-total">
                <br />
                <img src={Vector3} className="card-img-top rounded mx-auto d-block" style={{ height: "2rem", width: "2rem" }} alt="image" />
                <br />
                <h5 class="card-title">Training Services</h5>
                <div class="card-body">
                  <p class="card-text">We believe that the key to a successful maritime career is continuous learning and development</p>
                </div>
              </div>
            </div>
            <br />
            <div className='row'>
              <div className='col'>
                <div class="card cart-total" >
                  <br />
                  <img src={Vector1} className=" card-img-top rounded mx-auto d-block" style={{ height: "2rem", width: "2rem" }} alt="Vector1" />
                  <br />
                  <h5 class="card-title">Placement Services</h5>
                  <div class="card-body">
                    <p class="card-text">Connecting talent with opportunity is at the heart of what we do. Our placement services are designed to help maritime</p>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div class="card cart-total" >
                  <br />
                  <img src={Vector1} className=" card-img-top rounded mx-auto d-block" style={{ height: "2rem", width: "2rem" }} alt="Vector1" />
                  <br />
                  <h5 class="card-title">Cruise Services</h5>
                  <div class="card-body">
                    <p class="card-text">1. Carnival Corporation & pic <br/> 2. Royal Caribbean Group <br/> 3. Norwegian Cruise Line Holdings Ltd.</p>
                  </div>
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
