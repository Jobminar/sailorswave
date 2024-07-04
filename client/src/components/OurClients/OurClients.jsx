import React from 'react';
import "./OurClients.css";
import GrassLeft from "../../assets/Grass-Left.png"
import GrassRight from "../../assets/Grass-Right.png"
import Photo1 from "../../assets/Photo-1.png";
import Photo2 from "../../assets/Photo-2.png";
import Photo3 from "../../assets/Photo-3.png";
import Photo4 from "../../assets/Photo-4.png";
import Photo5 from "../../assets/Photo-5.png";
import Photo6 from "../../assets/Photo-6.png";
import Photo7 from "../../assets/Photo-7.png";
import Photo8 from "../../assets/Photo-8.png";
import Photo9 from "../../assets/Photo-9.png";
import Photo10 from "../../assets/Photo-10.png";
import Photo11 from "../../assets/Photo-11.png";
import Photo12 from "../../assets/Photo-12.png";
import Photo13 from "../../assets/Photo-13.png";
import Photo14 from "../../assets/Photo-14.png";
import Photo15 from "../../assets/Photo-15.png";
import Star from "../../assets/Star-1.png"

const OurClients = () => {
    return (
        <>
            <div className='div-background'>
                <br />
                <br />
                <br />
                <div className="jumbotron text-center  text-white">
                    <br />
                    <br />
                    <h5 className="display-4">What Our Clients Say About Us</h5>
                    <div>
                        <ul className="our-clients row">
                            <li><img src={GrassLeft} /></li>
                            <ul >
                                <li><img src={Star} /></li>
                                <li><img src={Star} /></li>
                                <li><img src={Star} /></li>
                                <li><img src={Star} /></li>
                                <li><img src={Star} /></li>
                            </ul>
                            <li>5.0 Rating</li>
                            <li><img src={GrassRight} /></li>
                        </ul>
                    </div>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>
                </div>
                <div className="row">
                    <p>Helping 4,000 Peoples take beautiful sreenshots everyday</p>
                    <div className="col">
                        <img src={Photo1} />
                    </div>
                    <div className="col">
                        <img src={Photo2} />
                    </div>
                    <div className="col">
                        <img src={Photo3} />
                    </div>
                    <div className="col">
                        <img src={Photo4} />
                    </div>
                    <div className="col">
                        <img src={Photo5} />
                    </div>
                    <div className="col">
                        <img src={Photo6} />
                    </div>
                    <div className="col">
                        <img src={Photo7} />
                    </div>
                    <div className="col">
                        <img src={Photo8} />
                    </div>
                    <div className="col">
                        <img src={Photo9} />
                    </div>
                    <div className="col">
                        <img src={Photo10} />
                    </div>
                    <div className="col">
                        <img src={Photo11} />
                    </div>
                    <div className="col">
                        <img src={Photo12} />
                    </div>
                    <div className="col">
                        <img src={Photo13} />
                    </div>
                    <div className="col">
                        <img src={Photo14} />
                    </div>
                    <div className="col">
                        <img src={Photo15} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card" style={{ width: "25rem", height:"25em" }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurClients
