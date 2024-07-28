import React, { useState } from "react";

const Sample = () => {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    state: "",
    country: "",
    uploadedFiles:{
    image:null,
  }
  });
  
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setDetails((preData) => ({...preData,[name]:value}));
  };
const handleFileChange = (e) => {
    const { name, files } = e.target;
    setDetails((prevData) => ({
      ...prevData,
      uploadedFiles: {
        ...prevData.uploadedFiles,
        [name]: files[0],
      },
    }))
  };
    
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Response from backend:", details);

    try {
      const response = await fetch("http://localhost:4000/sample", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });
      const data = await response.json();
      console.log("Response from backend:", data);
    } catch (error) {
      alert("Failed to submit form");
      console.error("Error:", error);
    }
  };
  
  return (
    <form onSubmit={submitHandler}>
    <div className="text-center">
      <label>firstName</label>
      <input name="firstName" value={details.firstName} onChange={handleChange}></input>
      <br/>
      <label>lastName</label>
      <input name="lastName" value={details.lastName} onChange={handleChange}></input>
      <br/>
      <label>email</label>
      <input name="email" value={details.email} onChange={handleChange}></input>
      <br/>
      <label>phoneNumber</label>
      <input name="phoneNumber" value={details.phoneNumber} onChange={handleChange}></input>
      <br/>
      <label>state</label>
      <input name="state" value={details.state} onChange={handleChange}></input>
      <br/>
      <label>country</label>
      <input name="country"  value={details.country} onChange={handleChange}></input>
      <br/>
      <label>image</label>
      <input name="image" type="file" onChange={handleFileChange}></input>
      <br/>
    <button type="submit">Submit</button>
    </div>
    </form>
  );
};

export default Sample;
