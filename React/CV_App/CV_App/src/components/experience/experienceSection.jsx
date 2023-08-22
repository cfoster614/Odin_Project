import React from 'react';

function DisplayExperience({ company, title, dates, duties }){
    return (
    <div className="flex-container">
      <h4>Work Experience</h4>
      <div className="flex space">
        <div className="flex-col">
          <span className="school">{company}</span>
          <span>{title}</span>
        </div>
        <span>{dates}</span>
      </div>
    </div>
    )
}

export default DisplayExperience;