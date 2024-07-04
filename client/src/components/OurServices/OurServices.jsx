import React from 'react';
import Vector1 from "../../assets/Vector-1.png"
import Vector2 from "../../assets/Vector-2.png"
import Vector3 from "../../assets/Vector-3.png"
import Vector4 from "../../assets/Vector-4.png"
import Vector5 from "../../assets/Vector-5.png"
import "./OurServices.css";


const OurServices = () => {
  return (
    <>
      <div>
        <br />
        <div className="container our-services text-center">
        <p className="text-center services">Our Services</p>
          <div className="row">
            <div className="col">
              <div className="card-total" >
                <br />
                <img src={Vector1} className=" card-img-top rounded mx-auto d-block" style={{ height: "2rem", width: "2rem" }} alt="Vector1" />
                <br />
                <p className="title">On Shore Joining's</p>
                <div className="card-body services-block">
                  <p className="card-text text">At Sailorswave, we understand the importance of efficient onshore operations</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card-total">
                <br />
                <img src={Vector2} className=" card-img-top rounded mx-auto d-block" style={{ height: "2rem", width: "2rem" }} alt="image" />
                <br />
                <p className="card-title title">Off Shore Joining's</p>
                <div className="card-body services-block">
                  <p className="card-text text">Our offshore resource management services are designed to support the complex needs of offshore operations</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card-total">
                <br />
                <img src={Vector3} className="card-img-top rounded mx-auto d-block" style={{ height: "2rem", width: "2rem" }} alt="image" />
                <br />
                <p className="card-title title">Training Services</p>
                <div className="card-body services-block">
                  <p className="card-text text">We believe that the key to a successful maritime career is continuous learning and development</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div className="card-total card-total4" >
                  <img src={Vector4} className=" card-img-top rounded mx-auto d-block" style={{ height: "2rem", width: "2rem" }} alt="Vector1" />
                  <br />
                  <p className="card-title title">Placement Services</p>
                  <div className="card-body services-block">
                    <p className="card-text text">Connecting talent with opportunity is at the heart of what we do. Our placement services are designed to help maritime</p>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className="card-total card-total5" >
                  <img src={Vector5} className=" card-img-top rounded mx-auto d-block" style={{ height: "2rem", width: "2rem" }} alt="Vector1" />
                  <br />
                  <p className="card-title title">Cruise Services</p>
                  <div className="card-body services-block">
                    <p className="card-text text">1. Carnival Corporation & pic <br/> 2. Royal Caribbean Group <br/> 3. Norwegian Cruise Line Holdings Ltd.</p>
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

export default OurServices;
