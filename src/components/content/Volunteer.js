import React, { useState, useEffect } from "react";
import axios from "axios";

import VolunteerForm from "./VolunteerForm";

const Volunteer = () => {
  const [users, setUsers] = useState([]);

  const url = "http://localhost:8080/api/users";

  const getUsers = async () => {
    const { data } = await axios.get(url);
    const allUsers = data;
    console.log("users: ", allUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);

  return (
    <div className="volunteer">
      <div className="title">
        <h2>Volunteer</h2>
      </div>
      <div className="description">
        Wow! So happy to receive your time and efforts! Please fill out this
        form to join our team :)
      </div>
      <VolunteerForm />
    </div>
  );
};

export default Volunteer;
