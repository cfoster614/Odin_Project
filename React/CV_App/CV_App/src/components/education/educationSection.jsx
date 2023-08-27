import React from "react";
import EducationDetailsForm from "./educationDetails";

function DisplayEducation({ school, degree, grad, nameDegree }) {
  
  return (
    <div className="flex-container">
      <h4>Education</h4>
      <div className="flex space">
        <div className="flex-col">
          <span className="school">{school}</span>
          <span>{degree} degree in {nameDegree}</span>
        </div>
        <span>{grad}</span>
      </div>
    </div>
  );
}

export default DisplayEducation;
