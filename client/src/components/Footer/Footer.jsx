import React from 'react';
import "./Footer.css";
import FooterSlide from "../../assets/Footer-Slide-1.png"
import FooterSailorsLogo from "../../assets/Footer-Sailors-Logo.png";
import EmailIcon2 from "../../assets/Email-icon-2.png";
import SocialIcon1 from "../../assets/Social-icon-1.png";
import SocialIcon2 from "../../assets/Social-icon-2.png";
import SocialIcon3 from "../../assets/Social-icon-3.png";
import SocialIcon4 from "../../assets/Social-icon-4.png";
import SocialIcon5 from "../../assets/Social-icon-5.jpeg";
import SocialIcon6 from "../../assets/Social-icon-6.jpeg";

const Footer = () => {
    return (
        <>
            <div className='row'>
                <div className='row'>
                    <div className='col'> <button type="button" className='bg-dark text-white'><img src={EmailIcon2} />Please Enter your email</button></div>
                    <div className='col'><button type="button" class="btn">SUBSCRIBE</button></div>
                </div>
                <div className='col'>
                    <img className="" src={FooterSailorsLogo} />
                </div>
                <div className='col'>
                    <div className='row'>
                        <div className='col'>
                            <div className='col'>
                                <b>COMPANY</b>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Morbi leo risus</li>
                                    <li class="list-group-item">Porta ac consectetur ac</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='col'>
                                <b>Our Services</b>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Morbi leo risus</li>
                                    <li class="list-group-item">Porta ac consectetur ac</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='container text-center'>Follow Us</div>
                    <div className='row'>
                        <div className='col'>
                            <img src={SocialIcon1} />
                        </div>
                        <div className='col'>
                            <img src={SocialIcon2} />
                        </div>
                        <div className='col'>
                            <img src={SocialIcon3} />
                        </div>
                        <div className='col'>
                            <img src={SocialIcon4} />
                        </div>
                    </div>
                    <div className='text-center'>Download our App</div>
                    <div className='row'>
                        <div className='col'>
                            <img src={SocialIcon5} />
                        </div>
                        <div className='col'>
                            <img src={SocialIcon6} />
                        </div>
                    </div>
                </div>
            </div>
            <img className="image-control" src={FooterSlide} />
        </>
    )
}

export default Footer
