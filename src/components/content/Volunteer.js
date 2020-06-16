import React from "react";

import UserForm from "./VolunteerForm";

const Volunteer = () => {
  return (
    <div className="volunteer">
      <div className="title">
        <h2>Volunteer</h2>
      </div>
      <div className="description">
        Wow! So happy to receive your time and efforts! Please fill out this
        form to join our team :)
      </div>
      <UserForm />
    </div>
  );
};

export default Volunteer;
