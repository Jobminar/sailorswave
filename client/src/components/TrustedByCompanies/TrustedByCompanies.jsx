import React from 'react'
import MaerskLogo from "../../assets/Maersk-Logo.png";
import MSCLogo from "../../assets/MSC-Logo.png";
import EvergreenLogo from "../../assets/Evergreen-Logo.png";
import HapagLogo from "../../assets/Hapag-Logo.png";
import CMACMGLogo from "../../assets/CMA-CMG-Logo.png";


import "./TrustedByCompanies.css";
const TrustedByCompanies = () => {
    return (
        <>
            <div className="container trusted">
                <div className="jumbotron text-center">
                   
                    <p className="display-6  trusted">Trusted By Companies including</p>
                    
                    <p className="lead shipment">At Sailorswave Shipment Pvt Ltd, our clients are at the heart of everything we do. Established in 2022, we have built a <br />reputation for delivering exceptional service and value to a diverse clientele across the globe.</p>
                   
                    <div className="container text-center comapany-line">
                        <div className="row">
                            <div className="col">
                                <img src={MaerskLogo}  />
                            </div>
                            <div className="col">
                                <img src={MSCLogo}  />

                            </div>
                            <div className="col">
                                <img src={EvergreenLogo}  />

                            </div>
                            <div className="col">
                                <img src={HapagLogo}  />

                            </div>
                            <div className="col">
                                <img src={CMACMGLogo} />

                            </div>
                            <br />
                            <br />
                            <br />
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrustedByCompanies
