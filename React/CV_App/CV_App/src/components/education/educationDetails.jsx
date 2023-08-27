import React from "react";

import AddForm from "./education";

function EducationDetailsForm(props) {
  function handleInputs(e, index) {
    const { name, value } = e.target;
    if (name === 'school') {
      props.setSchool(value);
    }
    if (name === 'degree') {
      props.setDegree(value);
    }
    if (name === 'grad') {
      props.setGrad(value);
    }
    if (name === 'name-degree') {
      props.setNameDegree(value);
    }
    
  }

    function handleClicks(){
      <AddForm />
    }

  // function handleClicks(e) {
  //   const { name, value } = e.target;
  //   const updatedForms = [...educationForm];
    
  //   props.setEducationForm(updatedForms);
  //   console.log(updatedForms[0])
  //   console.log(index)
  // }

  console.log(props.educationForm.school)

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
            Type of degree:
            <select
              type="text"
              name="degree"
              value={props.educationForm.degree}
              onChange={handleInputs}
            >
              <option value="Bachelor's">Bachelor's</option>
              <option value="Associates">Associates</option>
              <option value="Doctorate">Doctorate</option>
            </select>

          </div>

          <div className="mb-3">
            <label htmlFor="nameDegree"></label>
            Major:
            <input
              type="text"
              name="nameDegree"
              value={props.educationForm.nameDegree}
              onChange={handleInputs}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="grad"></label>
            Date of graduation
            <input
              type="date"
              name="grad"
              value={props.educationForm.grad}
              onChange={handleInputs}
            />
          </div>

        
        </form>
        <button onClick={handleClicks}>Add</button>
      </div>
    </>
  );
}

export default EducationDetailsForm;
