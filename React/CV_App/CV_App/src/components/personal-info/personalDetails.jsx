import React, { useState } from "react";
import ViewPersonalDetails from "./personalSection";

function PersonalDetailsForm({ personalForm, setPersonalForm }) {
  console.log(personalForm.name)
  function handleInputs(e) {
    const { name, value } = e.target;
    const updatedForm = [...personalForm]
    console.log(updatedForm[0])
    setPersonalForm(updatedForm)
    console.log(value)
  }

  return (
    <>
      <div className="collapse-box">
        <div
          data-bs-toggle="collapse"
          data-bs-target="#personalDetails"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Personal Details
        </div>

        <form
          id="personalDetails"
          className="collapse"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mb-3">
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              name="name"
              value={personalForm[0]}
              onChange={handleInputs}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={personalForm[1]}
              onChange={handleInputs}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone">Main phone</label>
            <input
              type="text"
              name="phone"
              value={personalForm[2]}
              onChange={handleInputs}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={personalForm[3]}
              onChange={handleInputs}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default PersonalDetailsForm;
