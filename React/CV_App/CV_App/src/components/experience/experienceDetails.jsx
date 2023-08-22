import React from "react";

function ExpDetailsForm(props) {

  function handleInputs(e) {
    const { name, value } = e.target;

    if( name === 'company') {
      props.setCompany(value);
    }
    if( name === 'title') {
      props.setTitle(value);
    }
    if( name === 'date') {
      props.setDates(value);
    }
    if( name === 'duties') {
      props.setDuties(value);
    }

  }

  return (
    <>
      <div className="collapse-box">
        <div
          data-bs-toggle="collapse"
          data-bs-target="#workExpForm"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Work Experience
        </div>

        <form id="workExpForm" className="collapse" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label htmlFor="company">Company name</label>
            <input 
            type="text" 
            name="company"
            value={props.company}
            onChange={handleInputs}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="title">Position title</label>
            <input 
            type="text" 
            name="title"
            value={props.title}
            onChange={handleInputs}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="date">Worked</label>
            <input 
            type="date" 
            name="date"
            value={props.dates}
            onChange={handleInputs}
            />
            to
            <input 
            type="date" 
            name="date"
            value={props.dates}
            onChange={handleInputs}
            />

          </div>

          <div className="mb-3">
            <label htmlFor="duties">Main responsibilities</label>
            <input 
            type="text" 
            name="duties"
            value={props.duties}
            onChange={handleInputs}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default ExpDetailsForm;
