
import React, { useState } from 'react';

import EducationDetailsForm from './educationDetails';

function AddForm(){
    const [school, setSchool] = useState('Oswego');
  const [degree, setDegree] = useState("Bachelor's");
  const [grad, setGrad] = useState('05/17/2017');
  const [nameDegree, setNameDegree] = useState('Wellness Management');
    return (
        <EducationDetailsForm 
        school={school} setSchool={setSchool}
      degree={degree} setDegree={setDegree}
      grad={grad} setGrad={setGrad}
      nameDegree={nameDegree} setNameDegree={setNameDegree}
        />
    )
}

export default AddForm;