import React, {useState} from 'react';
import "./BecomeASailor.css";
import Pattern1 from "../../assets/Pattern-1.png"
import Pattern2 from "../../assets/Pattern-2.png"
import Pattern3 from "../../assets/Pattern-3.png"
import Pattern4 from "../../assets/Pattern-4.png"

const BecomeASailor = () => {
    const [formData,setformData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        state:'',
        country:'',

    })
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('form data submitted:', formData)
    };
    const handleChange = (event) =>{
        const {name, value} = event.target;
        setformData({...formData, [name]:value})
    };
    return (
        <>
            <br />
            <br />
            <div className='row table'>
                <div className="sailor-text col">
                    <br />

                    <p className="sailor-text1">Become a Sailor</p>
                    <p className="sailor-text2">Used and supported in over the countries aroud the globe. <br />We'll work with you to open more doors and close more sales across all verticals.</p>
                </div>
                <div className='col'>
                    <br />
                    <img src={Pattern3} className='image3' alt="pattern3" />
                    <img src={Pattern4} className='image4' alt="pattern4" />
                    <div className='form'>
                        <form onSubmit={handleSubmit} className=' text-start form-total'>
                            <div className='row'>
                                <div className="form-group col name mt-2">
                                    <label htmlFor="FirstName">First Name</label>
                                    <input type="text" name='firstName' value={FormData.firstName} onChange={handleChange} className="form-control placeholder1 mb-2" id="FirstName" aria-describedby="FirstName" placeholder="enter first name" />
                                </div>
                                <div className="form-group col name mt-2">
                                    <label htmlFor="LastName">Last Name</label>
                                    <input type="text" name='lastName' value={FormData.lastName} onChange={handleChange} className="form-control placeholder1 mb-2" id="LastName" aria-describedby="LastName" placeholder="enter last name" />
                                </div>
                            </div>
                            <div className="form-group name">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" name='email' value={FormData.email} onChange={handleChange} className="form-control placeholder1 mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter email address" />
                            </div>
                            <div className='row'>
                                <div className="form-group col name">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input type="text" name='phoneNumber' value={FormData.phoneNumber} onChange={handleChange} className="form-control placeholder1 mb-2" id="phoneNumber" placeholder="enter contact number" />
                                </div>
                                <div className="form-group col name">
                                    <label htmlFor="State">State</label>
                                    <br />
                                    <div className="dropdown">
                                    <button className="btn dropdown-toggle " name='state' value={FormData.state} onChange={handleChange} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Select State
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">State 1</a></li>
                                        <li><a className="dropdown-item" href="#">State 2</a></li>
                                        <li><a className="dropdown-item" href="#">State 3</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="form-group name">
                                <label htmlFor="Country">Country</label>
                                <input type="text" name="country" value={formData.country} onChange={handleChange} className="form-control placeholder1" id="State" placeholder="enter your country" />
                            </div>
                            <br />
                            <div className='row'>
                                <div className='col '>
                                    <button type="submit" className="btn btn-primary apply-button">Apply</button>
                                </div>
                                <div className='col policy'>
                                    <label className="privacy-element" htmlFor="exampleCheck1">Privacy Policy</label>
                                </div>
                            </div>
                            <br />
                        </form >
                    </div>
                    <br />
                    <img src={Pattern1} className='image1' />
                </div>
                <div className='sailor-bottom'>
                    <img src={Pattern2} className='image2' />
                </div>

            </div>

        </>
    )
}

export default BecomeASailor
