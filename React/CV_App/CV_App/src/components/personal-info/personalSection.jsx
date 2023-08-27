import React, { useState } from "react";
import { useContext } from 'react';
import { FormContext } from "../form";


function DisplayPersonalDetails() {
  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;
  console.log(form)
  const keys = Object.keys(form);
  return (
    <div id='personal-details'>
      {keys.forEach(k=> {
        console.log(`${k}: ${form[k]}`)
        if(k === 'fullName') {
          <h2>{form[k]}</h2>
        }
        <div className='spans'>
          <span>{form[k]}</span>
      </div>
      })
      }
      
      
    </div>
  );
}

export default DisplayPersonalDetails;
