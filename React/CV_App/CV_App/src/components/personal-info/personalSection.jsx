import React, { useState } from "react";

function DisplayPersonalDetails({ fullName, email, phone, address }) {
  return (
    <div id='personal-details'>
      <h2>{fullName}</h2>
      <div class='spans'>
        <span>{email}</span>
        <span>{phone}</span>
        <span>{address}</span>
      </div>
    </div>
  );
}

export default DisplayPersonalDetails;
