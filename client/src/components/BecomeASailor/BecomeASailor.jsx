import React from 'react'
import "./BecomeASailor.css";
import Pattern1 from "../../assets/Pattern-1.png"
import Pattern2 from "../../assets/Pattern-2.png"
import Pattern3 from "../../assets/Pattern-3.png"
import Pattern4 from "../../assets/Pattern-4.png"

const BecomeASailor = () => {
    return (
        <>
            <form>
                <div className="form-group">
                    <label for="FirstName">First Name</label>
                    <input type="text" className="form-control" id="FirstName" aria-describedby="FirstName" placeholder="enter first name" />
                </div>
                <div className="form-group">
                    <label for="LastName">Last Name</label>
                    <input type="text" className="form-control" id="LastName" aria-describedby="LastName" placeholder="enter last name" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter email address" />
                </div>
                <div className="form-group">
                    <label for="phoneNumber">Phone Number</label>
                    <input type="number" className="form-control" id="phoneNumber" placeholder="enter contact number" />
                </div>
                <div className="form-group">
                    <label for="State">State</label>
                    <div class="btn-group">
                        <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Action
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label for="Country">Country</label>
                    <input type="text" className="form-control" id="State" placeholder="Country" />
                </div>
                <button type="submit" className="btn btn-primary">Apply</button>
                <label className="form-check-label" for="exampleCheck1">Privacy Policy</label>
            </form >
            <div>

                <img src={Pattern1}/>
                <img src={Pattern2}/>
                <img src={Pattern3}/>
                <img src={Pattern4}/>
            </div>
        </>
    )
}

export default BecomeASailor
