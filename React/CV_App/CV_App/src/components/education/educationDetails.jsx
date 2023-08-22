import React from "react";

function EducationDetailsForm(props) {
  function handleInputs(e) {
    const {name, value} = e.target;
    if( name === 'school'){
      props.setSchool(value);
    }
    if( name === 'degree'){
      props.setDegree(value);
    }
    if( name === 'grad'){
      props.setGrad(value);
    }
  }

  return (
    <>
    <div className="collapse-box">
      <div
        data-bs-toggle="collapse"
        data-bs-target="#educationForm"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Education
      </div>

      <form id="educationForm" className="collapse" onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="school"></label>
          School name
          <input 
          type="text" 
          name="school"
          value={props.school}
          onChange={handleInputs}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="degree"></label>
          Type of degree
          <input 
          type="text" 
          name="degree"
          value={props.degree}
          onChange={handleInputs}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="grad"></label>
          Date of graduation
          <input 
          type="text" 
          name="grad"
          value={props.grad}
          onChange={handleInputs}
          />
        </div>

      </form>
      </div>
    </>
  );
}

export default EducationDetailsForm;
