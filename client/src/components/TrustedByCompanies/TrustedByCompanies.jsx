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
            <div className='container'>
                <div class="jumbotron text-center">
                    <br />
                    <br />
                    <h4 class="display-6">Trusted By Companies including</h4>
                    <br />
                    <br />
                    <p class="lead">At Sailorswave Shipment Pvt Ltd, our clients are at the heart of everything we do. Established in 2022, we have built a <br />reputation for delivering exceptional service and value to a diverse clientele across the globe.</p>
                    <br />
                    <br />
                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <img src={MaerskLogo} style={{height:"2em", width:"8em"}} />
                            </div>
                            <div class="col">
                                <img src={MSCLogo}  style={{height:"3em", width:"8em"}}/>

                            </div>
                            <div class="col">
                                <img src={EvergreenLogo} style={{height:"4em", width:"8em"}} />

                            </div>
                            <div class="col">
                                <img src={HapagLogo}  style={{height:"2em", width:"10em"}}/>

                            </div>
                            <div class="col">
                                <img src={CMACMGLogo} style={{height:"3em", width:"8em"}}/>

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
