import React, {useState} from "react";


const Signup2 = () => {
    const [formData, setFormData] = useState({
      candidateName: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
        const submitHandler = async (e) => {
      e.preventDefault();
      console.log("Form Data Submitted:", formData);
      // try {
      //   const response = await fetch("http://localhost:4000/form", {
      //     method: "POST",
      //     headers:{
      //       'Content-type':'application/json',
      //     },
      //     body: JSON.stringify(formData),
      //   });
      //   const data = await response.json();
      //   console.log("Response from backend:", data);
      //     if (response.ok === 201) {
      //       alert("data added successfully");
      //       console.log(response);
      //     } else {
      //       alert('Failed to submit form');
      //     }
      // } catch (error) {
      //   console.error("Error:",error)
      // }
    };
    return (
      <>
        
          <form onSubmit={submitHandler} className="form-total-1">
            <br />
            <p className="side-header">&nbsp;&nbsp;PERSONAL DETAILS</p>
            <br />
            <div className="row container text-start">
              <div className="col">
                <div>
                  <label htmlFor="candidateName" className="candidate-label">
                    Candidate Name<span className="red">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="candidateName"
                    value={formData.candidateName}
                    onChange={handleChange}
                    className="input-width-1"
                    placeholder="Candidate Name"
                  />
                </div>
            <br />
         </div>
         </div>
            <button className="form-submit" type="submit">
              SUBMIT
            </button>
          </form>
      </>
    );
  };

  export default Signup2;