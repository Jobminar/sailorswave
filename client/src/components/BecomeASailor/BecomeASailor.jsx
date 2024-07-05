import React from 'react';
import "./BecomeASailor.css";
import Pattern1 from "../../assets/Pattern-1.png"
import Pattern2 from "../../assets/Pattern-2.png"
import Pattern3 from "../../assets/Pattern-3.png"
import Pattern4 from "../../assets/Pattern-4.png"

const BecomeASailor = () => {
    return (
        <>
        <br/>
        <br/>
            
            <div className='row table'>
                <div className="sailor-text col">
                    <p className="sailor-text1">Become a Sailor</p>
                    <p className="sailor-text2">Used and supported in over the countries aroud the globe. <br />We'll work with you to open more doors and close more sales across all verticals.</p>
                </div>
                <div className='col'>
                <img src={Pattern3} className='image3'/>
                <img src={Pattern4} className='image4'/>
                <div className='form'>
                     <form className=' text-start form-total'>
                        <div className='row'>
                            <div className="form-group col name">
                                <label for="FirstName">First Name</label>
                                <input type="text" className="form-control placeholder1" id="FirstName" aria-describedby="FirstName" placeholder="enter first name" />
                            </div>
                            <div className="form-group col name">
                                <label for="LastName">Last Name</label>
                                <input type="text" className="form-control placeholder1" id="LastName" aria-describedby="LastName" placeholder="enter last name" />
                            </div>
                        </div>
                        <div className="form-group name">
                            <label for="exampleInputEmail1">email</label>
                            <input type="email" className="form-control input-larger placeholder1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter email address" />
                        </div>
                        <div className='row'>
                            <div className="form-group col name">
                                <label for="phoneNumber">Phone Number</label>
                                <input type="number" className="form-control placeholder1" id="phoneNumber" placeholder="enter contact number" />
                            </div>
                            <div className="form-group col name">
                                <label for="State">State</label>
                                <br/>
                                <div class="btn-group">
                                    <button type="button" className="btn dropdown-toggle list-states placeholder1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Select State
                                    </button>
                                    <div className="dropdown-menu ">
                                        <a className="dropdown-item" href="#">State1</a>
                                        <a className="dropdown-item" href="#">State2</a>
                                        <a className="dropdown-item" href="#">State3</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group name">
                            <label for="Country">Country</label>
                            <input type="text" className="form-control input-larger placeholder1" id="State" placeholder="enter your country" />
                        </div>
                        <br />
                        <div className='row'>

                            <div className='col '>

                                <button type="submit" className="btn btn-primary apply-button">Apply</button>
                            </div>
                            <div className='col policy'>
                                <label className="privacy-element" for="exampleCheck1">Privacy Policy</label>

                            </div>
                        </div>
                        <br />
                    </form >
                    <div>
                    </div>
                </div>
                </div>
                <img src={Pattern1} className='image1'/>
                <img src={Pattern2} className='image2'/>
            </div>

        </>
    )
}

export default BecomeASailor
