import React, { useState } from "react";
import ViewPersonalDetails from "./personalSection";

function PersonalDetailsForm(props) {
  function handleInputs(e) {
    const { name, value } = e.target;
    if (name === "name") {
      props.setFullName(value);
    }
    if (name === "email") {
      props.setEmail(value);
    }
    if (name === "phone") {
      props.setPhone(value);
    }
    if (name === "address") {
      props.setAddress(value);
    }
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
              value={props.fullName}
              onChange={handleInputs}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={props.email}
              onChange={handleInputs}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone">Main phone</label>
            <input
              type="text"
              name="phone"
              value={props.phone}
              onChange={handleInputs}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={props.address}
              onChange={handleInputs}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default PersonalDetailsForm;
