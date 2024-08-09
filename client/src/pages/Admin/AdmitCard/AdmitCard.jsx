import React from 'react'

const AdmitCard = () => {
  return (
    <>
      <div>
        <div>
        <img src={""} alt=""/>
        </div>
        <div>
            <ul>
                <li>Name:</li>
                <li>Birth Date:</li>
                <li>Gmail:</li>
                <li>Location:</li>
            </ul>
        </div>
      </div>
      <div>
        <p>Details of Tony Stark</p>
        <ul>
                <li>Application number</li>
                <li>Application status</li>
                <li>Date of applied</li>
                <li>Date of Interview</li>
                <li>Time of Interview</li>
            </ul>
      </div>
      <button>Generate Admit card</button>
    </>
  )
}

export default AdmitCard
