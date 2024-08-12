import React from 'react'
import { Link } from 'react-router-dom'
import "./ApplyWith.css";
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';


const applyWith = () => {
  return (
    <>
    <Header/>
    <div className='row'>
      <div className='left-container'>
        <ul>
          <Link to="/ApplicationPage" style={{paddingLeft: 13, textDecoration: 'none'}}><li>Application form</li></Link>
          <Link style={{paddingLeft: 13, textDecoration: 'none'}}><li>Your Application number</li></Link>
          <Link style={{paddingLeft: 13, textDecoration: 'none'}}><li>Pay Application fee</li></Link>
          <Link style={{paddingLeft: 13, textDecoration: 'none'}}><li>Check Admit card</li></Link>
        </ul>
      </div>
      <div className='right-container text-center'>
        <p>Application of merchant navy</p>
        <label>Mobile number</label>&nbsp;&nbsp;&nbsp;
        <input type="text"/>
        <br/>
        <br/>
        <button className="adjust-button w-auto">Continue</button>
      </div>
    </div>
    <div className=''>
    </div>
    <Footer/>
    </>
  )
}

export default applyWith
