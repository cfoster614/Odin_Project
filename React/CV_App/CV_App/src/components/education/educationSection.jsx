import React from "react";

function DisplayEducation({ school, degree, grad }) {
  return (
    <div className="flex-container">
      <h4>Education</h4>
      <div className="flex space">
        <div className="flex-col">
          <span className="school">{school}</span>
          <span>Degree in {degree}</span>
        </div>
        <span>{grad}</span>
      </div>
    </div>
  );
}

export default DisplayEducation;
