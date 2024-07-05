import React from 'react';
import "./BecomeASailor.css";
import Pattern1 from "../../assets/Pattern-1.png"
import Pattern2 from "../../assets/Pattern-2.png"
import Pattern3 from "../../assets/Pattern-3.png"
import Pattern4 from "../../assets/Pattern-4.png"

const BecomeASailor = () => {
    return (
        <>
            <div className=''>
                <p>Become a Sailor</p>
                <p>used and supported in over the countries aroud the globe. <br />We'll work with you to open more doors and close more sales across all verticals.</p>
            </div>
            <div className=''>
                <div className='image-background'><img /></div>
                <form className='form-total text-start'>
                    <div className='row'>

                        <div className="form-group col">
                            <label for="FirstName">First Name</label>
                            <input type="text" className="form-control" id="FirstName" aria-describedby="FirstName" placeholder="enter first name" />
                        </div>
                        <div className="form-group col">
                            <label for="LastName">Last Name</label>
                            <input type="text" className="form-control" id="LastName" aria-describedby="LastName" placeholder="enter last name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter email address" />
                    </div>
                    <div className='row'>
                        <div className="form-group col">
                            <label for="phoneNumber">Phone Number</label>
                            <input type="number" className="form-control" id="phoneNumber" placeholder="enter contact number" />
                        </div>
                        <div className="form-group col">
                            <label for="State">State</label>
                            <div class="btn-group">
                                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Select State
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">State1</a>
                                    <a className="dropdown-item" href="#">State2</a>
                                    <a className="dropdown-item" href="#">State3</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="Country">Country</label>
                        <input type="text" className="form-control" id="State" placeholder="Country" />
                    </div>
                    <br />
                    <div className='row'>

                        <div className='col '>

                            <button type="submit" className="btn btn-primary apply-button">Apply</button>
                        </div>
                        <div className='col'>
                            <label className="privacy-element" for="exampleCheck1">Privacy Policy</label>

                        </div>
                    </div>
                    <br />
                </form >
                <div>


                    <img src={Pattern1} />
                    <img src={Pattern2} />
                </div>
            </div>
        </>
    )
}

export default BecomeASailor
